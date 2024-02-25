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
    z.object({
      id: z.string(),
    }),
    ...Object.entries(shape).map(([key, value]) =>
      value.itemSchema.transform((input) => ({ [key]: input }))
    ),
  ];

  const transform = (input: any): Item =>
    merge({}, ...transformers.map((t) => t.parse(input)));

  return {
    readAllItems: async () => {
      const pages = (
        await notion.databases.query({
          database_id,
        })
      ).results;

      return pages.map(transform);
    },

    readItem: async (id: string) => {
      const page = await notion.pages.retrieve({
        page_id: id,
      });

      return transform(page);
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

  const itemSchema = pageSchema.transform((property: any) => ({
    plain: property[propertyName].properties.rich_text
      .map((text: z.infer<typeof RichTextSchema>[number]) => text.plain_text)
      .join("\n\n"),
    html: notionRichTextToHtml(property[propertyName].properties.rich_text),
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

  const itemSchema = pageSchema.transform((property: any) =>
    z
      .enum(options)
      .parse(property.properties[propertyName].select.name.toLowerCase())
  );

  return {
    pageSchema,
    itemSchema,
  };
};

export const notion = {
  database,
  text,
  select,
};
