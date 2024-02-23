export default defineEventHandler(async (event) => {
  const notion = useNotion();

  const nuggets: Nugget[] = [];

  const nuggetPages = (
    await notion.databases.query({
      database_id: "eab87cbb21b04d898f8e97b8d0ca95dc",
    })
  ).results;

  for (const page of nuggetPages) {
    const result = NuggetPageSchema.safeParse(page);
    if (!result.success) {
      console.warn("Failed to parse nugget page", page, result.error);
      continue;
    }

    const parsedPage = result.data;

    const title = parsedPage.properties.Name.title[0].plain_text;
    const type = parsedPage.properties.Type.select.name.toLowerCase();
    const text = parsedPage.properties.Text.rich_text[0].plain_text;
    const relation = parsedPage.properties.Originator.relation;
    const originator = relation[0] ? relation[0].id : undefined;

    const nuggetResult = NuggetSchema.safeParse({
      id: page.id,
      text,
      type,
      originator,
      slug: aliasify(title),
    });
    if (!nuggetResult.success) {
      console.warn("Failed to parse nugget", page, nuggetResult.error);
      continue;
    }

    nuggets.push(nuggetResult.data);
  }

  return nuggets;
});
