const applyAnnotations = (
  content: string,
  annotations: Annotations
): string => {
  let result = content;
  const { bold, italic, strikethrough, underline, code, color } = annotations;

  if (bold) result = `<strong>${result}</strong>`;
  if (italic) result = `<em>${result}</em>`;
  if (strikethrough) result = `<del>${result}</del>`;
  if (underline) result = `<u>${result}</u>`;
  if (code) result = `<code>${result}</code>`;
  if (color) result = `<span data-notion-color="${color}">${result}</span>`;

  return result;
};

export const notionRichTextToHtml = (richText: RichText): string => {
  return richText
    .map((item) => {
      if (item.type !== "text")
        return `<!-- Unsupported type: ${item.type} -->`;

      if (item.plain_text.trim() === "") return "";

      const { text, annotations } = item;

      const contentWithBreaks = text.content
        .replace(/\n/g, "<br>")
        // Remove leading and trailing breaks
        .replace(/^(<br>)+/, "")
        .replace(/(<br>)+$/, "");
      const annotatedContent = applyAnnotations(contentWithBreaks, annotations);
      return `<p>${annotatedContent}</p>`;
    })
    .join("");
};
