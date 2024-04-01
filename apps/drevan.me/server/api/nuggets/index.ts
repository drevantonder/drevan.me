export default defineEventHandler(async (event) => {
  const { limit } = getQuery(event);
  let page_size: number | undefined = undefined;
  if (typeof limit === "number") {
    page_size = limit;
  } else if (typeof limit === "string") {
    page_size = parseInt(limit);
  }

  return Nuggets.readItems({
    limit: page_size,
  });
});
