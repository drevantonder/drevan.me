import { z } from "zod";

export const NuggetSchema = z.object({
  id: z.string(),
  text: z.string(),
  textHtml: z.string(),
  type: z.enum(["thought", "quote", "lyric"]),
  originator: PersonSchema.optional(),
  content: ContentSchema.optional(),
  slug: z.string(),
});

export type Nugget = z.infer<typeof NuggetSchema>;

export const NuggetPageSchema = PageSchema.extend({
  properties: z.object({
    Name: TitlePropertySchema,
    Type: z.object({
      select: z.object({ name: z.string() }),
    }),
    Originator: RelationPropertySchema,
    Content: RelationPropertySchema,
    Text: z.object({
      rich_text: RichTextSchema,
    }),
  }),
});

export type NuggetPage = z.infer<typeof NuggetPageSchema>;
