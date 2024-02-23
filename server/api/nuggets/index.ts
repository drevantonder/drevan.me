export default defineEventHandler(async (event) => {
  const notion = useNotion();

  const nuggets: Nugget[] = [];

  const { limit } = getQuery(event);
  let page_size: number | undefined = undefined;
  if (typeof limit === "number") {
    page_size = limit;
  } else if (typeof limit === "string") {
    page_size = parseInt(limit);
  }

  const nuggetPages = (
    await notion.databases.query({
      database_id: "eab87cbb21b04d898f8e97b8d0ca95dc",
      page_size,
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    })
  ).results.flatMap((page) => {
    const result = NuggetPageSchema.safeParse(page);

    if (!result.success) {
      console.warn("Failed to parse nugget page", page, result.error);
      return [];
    }
    return [result.data];
  });

  for (const page of nuggetPages) {
    const title = page.properties.Name.title[0].plain_text;
    const type = page.properties.Type.select.name.toLowerCase();
    const text = page.properties.Text.rich_text[0].plain_text;

    const originatorRelation = page.properties.Originator.relation;
    const originatorId = originatorRelation[0]
      ? originatorRelation[0].id
      : undefined;

    let originator: Person | undefined = undefined;
    if (originatorId) {
      const originatorPage = originatorId
        ? await notion.pages.retrieve({
            page_id: originatorId,
          })
        : undefined;

      if (originatorPage) {
        const result = PersonPageSchema.safeParse(originatorPage);
        if (result.success) {
          const { id, properties } = result.data;
          const name = properties.Name.title[0].plain_text;
          originator = {
            id,
            name,
            slug: aliasify(name),
          };
        }
      }
    }

    const contentRelation = page.properties.Content.relation;
    const contentId = contentRelation[0] ? contentRelation[0].id : undefined;

    let content: Content | undefined = undefined;
    if (contentId) {
      const contentPage = contentId
        ? await notion.pages.retrieve({
            page_id: contentId,
          })
        : undefined;

      if (contentPage) {
        const result = ContentPageSchema.safeParse(contentPage);
        if (result.success) {
          const { id, properties } = result.data;
          const name = properties.Name.title[0].plain_text;
          content = {
            id,
            name,
            slug: aliasify(name),
          };
        }
      }
    }

    const nuggetResult = NuggetSchema.safeParse({
      id: page.id,
      text,
      textHtml: notionRichTextToHtml(page.properties.Text.rich_text),
      type,
      originator,
      content,
      slug: aliasify(title),
    } satisfies Nugget);
    if (!nuggetResult.success) {
      console.warn("Failed to parse nugget", page, nuggetResult.error);
      continue;
    }

    nuggets.push(nuggetResult.data);
  }

  return nuggets;
});
