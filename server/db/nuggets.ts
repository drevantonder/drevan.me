export const Nuggets = notion.database("nuggets", {
  text: notion.text("Text"),
  type: notion.select("Type", ["thought", "quote", "lyric"]),
  // originator: notion.relation("Originator", () => Person).optional(),
  // content: notion.relation("Content", () => Content).optional(),
});

export type Nugget = typeof Nuggets.$inferItem;
