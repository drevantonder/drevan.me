import { Client, isFullPage } from "@notionhq/client";
import { expect, onTestFailed, test } from "vitest";

test("RichText schema parses samples without error", async () => {
  const notion = new Client({
    auth: import.meta.env.NUXT_NOTION_TOKEN,
  });

  const nuggetPages = (
    await notion.databases.query({
      database_id: "eab87cbb21b04d898f8e97b8d0ca95dc",
    })
  ).results;

  for (const page of nuggetPages) {
    if (
      !isFullPage(page) ||
      !page.properties.Text ||
      page.properties.Text.type !== "rich_text"
    ) {
      throw new Error("Not a full page or no rich text property found");
    }

    const parseResult = RichTextSchema.safeParse(
      page.properties.Text.rich_text
    );

    if (!parseResult.success) {
      onTestFailed(() => {
        console.error(parseResult.error);
      });
    }

    expect(parseResult.success).toBe(true);
  }
});
