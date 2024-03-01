import merge from "lodash.merge";
import { z } from "zod";

type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer I
) => void
  ? I
  : never;

const database = <
  Shape extends {
    [x: string]: {
      pageSchema: z.ZodTypeAny;
      itemSchema: z.ZodTypeAny;
    };
  },
  Page extends UnionToIntersection<z.infer<Shape[keyof Shape]["pageSchema"]>>,
  Item extends {
    [Attribute in keyof Shape]: z.infer<Shape[Attribute]["itemSchema"]>;
  }
>(
  name: string,
  shape: Shape
) => {
  const notion = useNotion();
  const database_id = useRuntimeConfig()[name + "Database"];

  const transformers = [
    ...Object.entries(shape).map(([key, value]) =>
      value.itemSchema.transform((input) => ({ [key]: input }))
    ),
  ];

  const transform = async (input: any): Promise<Item> =>
    merge(
      {},
      ...(await Promise.all(
        transformers.map(async (t) => {
          console.log(input);
          const d = await t.parseAsync(input);
          console.log(d);
          return d;
        })
      ))
    );

  return {
    readAllItems: async () => {
      const pages = (
        await notion.databases.query({
          database_id,
        })
      ).results;

      return await Promise.all(pages.map(transform));
    },

    readItem: async (id: string) => {
      const page = await notion.pages.retrieve({
        page_id: id,
      });

      return transform(page);
    },

    readItems: async (filter: { limit?: number }) => {
      const pages = (
        await notion.databases.query({
          database_id,
          page_size: filter.limit,
        })
      ).results;

      return await Promise.all(pages.map(transform));
    },

    $inferPage: {} as Page,
    $inferItem: {} as Item,
  };
};

// To get around https://github.com/microsoft/TypeScript/issues/13948
function kv<K extends PropertyKey, V>(
  k: K,
  v: V
): { [P in K]: { [Q in P]: V } }[K] {
  return { [k]: v } as any;
}

const id = () => {
  const pageSchema = z.object({ id: z.string() });

  const itemSchema = pageSchema.transform((page) => page.id);

  return {
    pageSchema,
    itemSchema,
  };
};

const slug = <const PropertyName extends string>(
  propertyName: PropertyName = "Name" as PropertyName
) => {
  const pageSchema = z.object({
    properties: z.object(
      kv(
        propertyName,
        z.object({
          title: z.array(z.object({ plain_text: z.string() })).nonempty(),
        })
      )
    ),
  });

  const itemSchema = pageSchema.transform((page: any) =>
    aliasify(page.properties[propertyName].title[0].plain_text)
  );

  return {
    pageSchema,
    itemSchema,
  };
};

const text = <const PropertyName extends string>(
  propertyName: PropertyName
) => {
  const pageSchema = z.object({
    properties: z.object(
      kv(
        propertyName,
        z.object({
          rich_text: RichTextSchema,
        })
      )
    ),
  });

  const itemSchema = pageSchema.transform((page: any) => ({
    plain: (
      page.properties[propertyName].rich_text as z.infer<typeof RichTextSchema>
    )
      .map((text) => text.plain_text)
      .join("\n\n"),
    html: notionRichTextToHtml(page.properties[propertyName].rich_text),
  }));

  return {
    pageSchema,
    itemSchema,
  };
};

const select = <
  const PropertyName extends string,
  Option extends string,
  Options extends [Option, ...Option[]]
>(
  propertyName: PropertyName,
  options: Options
) => {
  const pageSchema = z.object({
    properties: z.object(
      kv(
        propertyName,
        z.object({
          select: z.object({ name: z.string() }),
        })
      )
    ),
  });

  const itemSchema = pageSchema.transform((page: any) =>
    z
      .enum(options)
      .parse(page.properties[propertyName].select.name.toLowerCase())
  );

  return {
    pageSchema,
    itemSchema,
  };
};

const name = <const PropertyName extends string>(
  propertyName: PropertyName = "Name" as PropertyName
) => {
  const pageSchema = z.object({
    properties: z.object(
      kv(
        propertyName,
        z.object({
          title: z.array(z.object({ plain_text: z.string() })).nonempty(),
        })
      )
    ),
  });

  const itemSchema = pageSchema.transform(
    (page: any) => page.properties[propertyName].title[0].plain_text as string
  );

  return {
    pageSchema,
    itemSchema,
  };
};

const oneToOne = <
  const PropertyName extends string,
  Database extends ReturnType<typeof database>
>(
  propertyName: PropertyName,
  getDb: () => Database
) => {
  const pageSchema = z.object({
    properties: z.object(
      kv(
        propertyName,
        z.object({
          relation: z.array(z.object({ id: z.string() })),
        })
      )
    ),
  });

  const itemSchema = pageSchema.transform(
    async (page: any): Promise<Database["$inferItem"] | null> => {
      const id = page.properties[propertyName].relation[0]?.id;
      return id ? getDb().readItem(id) : null;
    }
  );

  return {
    pageSchema,
    itemSchema,
  };
};

const number = <const PropertyName extends string>(
  propertyName: PropertyName
) => {
  const pageSchema = z.object({
    properties: z.object(
      kv(
        propertyName,
        z.object({
          number: z.number(),
        })
      )
    ),
  });

  const itemSchema = pageSchema.transform(
    (page: any) => page.properties[propertyName].number as number
  );

  return {
    pageSchema,
    itemSchema,
  };
};

export const notion = {
  id,
  slug,
  database,
  text,
  select,
  name,
  oneToOne,
  number,
};
