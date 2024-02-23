import { z } from "zod";

export const PersonSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});

export type Person = z.infer<typeof PersonSchema>;

export const PersonPageSchema = PageSchema.extend({
  properties: z.object({
    Name: TitlePropertySchema,
  }),
});

export type PersonPage = z.infer<typeof PersonPageSchema>;
