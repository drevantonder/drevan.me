import { z } from "zod";

export const NuggetSchema = z.object({
  id: z.string(),
  body: z.string(),
  type: z.enum(["thought", "quote"]),
  originator: z.string().optional(),
  slug: z.string(),
});

export type Nugget = z.infer<typeof NuggetSchema>;

export const NuggetPageSchema = z.object({
  id: z.string(),
  properties: z.object({
    Name: z.object({
      title: z.array(z.object({ plain_text: z.string() })).nonempty(),
    }),
    Type: z.object({
      select: z.object({ name: z.string() }),
    }),
    Originator: z.object({
      relation: z.array(z.object({ id: z.string() })),
    }),
  }),
});

export type NuggetPage = z.infer<typeof NuggetPageSchema>;

export const NuggetBlocksSchema = z
  .tuple([
    z.object({
      paragraph: z.object({
        rich_text: z.array(z.object({ plain_text: z.string() })).nonempty(),
      }),
    }),
  ])
  .rest(z.any());

export type NuggetBlocks = z.infer<typeof NuggetBlocksSchema>;
