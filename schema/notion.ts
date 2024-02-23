import { z } from "zod";

export const AnnotationsSchema = z.object({
  bold: z.boolean(),
  italic: z.boolean(),
  strikethrough: z.boolean(),
  underline: z.boolean(),
  code: z.boolean(),
  color: z.enum([
    "default",
    "gray",
    "brown",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "red",
    "gray_background",
    "brown_background",
    "orange_background",
    "yellow_background",
    "green_background",
    "blue_background",
    "purple_background",
    "pink_background",
    "red_background",
  ]),
});

export type Annotations = z.infer<typeof AnnotationsSchema>;

export const TextRichTextItemSchema = z.object({
  type: z.literal("text"),
  text: z.object({
    content: z.string(),
    link: z
      .object({
        url: z.string(),
      })
      .nullable(),
  }),
  annotations: AnnotationsSchema,
  plain_text: z.string(),
  href: z.string().nullable(),
});

export type TextRichTextItem = z.infer<typeof TextRichTextItemSchema>;

export const RichTextSchema = z.array(
  z.discriminatedUnion("type", [
    TextRichTextItemSchema,
    // These types aren't fully defined yet
    z.object({
      type: z.literal("mention"),
      mention: z.any(),
      annotations: AnnotationsSchema,
      plain_text: z.string(),
      href: z.string().nullable(),
    }),
    z.object({
      type: z.literal("equation"),
      equation: z.object({
        expression: z.string(),
      }),
      annotations: AnnotationsSchema,
      plain_text: z.string(),
      href: z.string().nullable(),
    }),
  ])
);

export type RichText = z.infer<typeof RichTextSchema>;

export const RelationPropertySchema = z.object({
  relation: z.array(z.object({ id: z.string() })),
});

export type RelationProperty = z.infer<typeof RelationPropertySchema>;

export const TitlePropertySchema = z.object({
  title: z.array(z.object({ plain_text: z.string() })).nonempty(),
});

export type TitleProperty = z.infer<typeof TitlePropertySchema>;

export const PageSchema = z.object({
  id: z.string(),
});

export type Page = z.infer<typeof PageSchema>;
