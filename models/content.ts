import { z } from "zod";

export const ContentSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});

export type Content = z.infer<typeof ContentSchema>;

export const ContentPageSchema = PageSchema.extend({
  properties: z.object({
    Name: TitlePropertySchema,
  }),
});

export type ContentPage = z.infer<typeof ContentPageSchema>;
