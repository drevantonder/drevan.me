import merge from "lodash.merge";
import { z } from "zod";

const database = <
  T extends Record<string, z.ZodTypeAny>,
  Item extends { [K in keyof T]: z.infer<T[K]> }
>(
  name: string,
  shape: T
) => {
  const notion = useNotion();
  const database_id = useRuntimeConfig()[name + "Database"];

  const transformers = [
    z.object({
      id: z.string(),
    }),
    ...Object.entries(shape).map(([key, value]) =>
      value.transform((input) => ({ [key]: input }))
    ),
  ];

  const transform = (input: any) =>
    merge({}, ...transformers.map((t) => t.parse(input)));

  return {
    readAllItems: async () => {
      const pages = (
        await notion.databases.query({
          database_id,
        })
      ).results;

      return pages.map(transform) as Item[];
    },

    readItem: async (id: string) => {
      const page = await notion.pages.retrieve({
        page_id: id,
      });

      return transform(page) as Item;
    },

    $inferItem: {} as Item,
  };
};

const text = (propertyName: string) =>
  z
    .object({
      properties: z.object({
        [propertyName]: z.object({
          rich_text: RichTextSchema,
        }),
      }),
    })
    .transform((input) => ({
      plain: input.properties[propertyName].rich_text
        .map((text) => text.plain_text)
        .join("\n\n"),
      html: notionRichTextToHtml(input.properties[propertyName].rich_text),
    }));

const select = <U extends string, T extends [U, ...U[]]>(
  propertyName: string,
  options: T
) =>
  z
    .object({
      properties: z.object({
        [propertyName]: z.object({
          select: z.object({
            name: z.string(),
          }),
        }),
      }),
    })
    .transform((input) =>
      z
        .enum(options)
        .parse(input.properties[propertyName].select.name.toLowerCase())
    );

export const notion = {
  database,
  text,
  select,
};
