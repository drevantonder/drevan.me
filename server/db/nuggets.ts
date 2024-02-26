export const People = notion.database("people", {
  id: notion.id(),
  slug: notion.slug(),
  name: notion.name(),
});

export type PersonPage = typeof People.$inferPage;
export type Person = typeof People.$inferItem;

export const Content = notion.database("content", {
  id: notion.id(),
  slug: notion.slug(),
  title: notion.name(),
});

export const Nuggets = notion.database("nuggets", {
  id: notion.id(),
  slug: notion.slug(),
  text: notion.text("Text"),
  type: notion.select("Type", ["thought", "quote", "lyric"]),
  originator: notion.oneToOne("Originator", () => People),
  content: notion.oneToOne("Content", () => Content),
});

export type NuggetPage = typeof Nuggets.$inferPage;
export type Nugget = typeof Nuggets.$inferItem;
