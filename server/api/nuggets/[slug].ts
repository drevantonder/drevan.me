export default defineEventHandler(async (event) => {
  const nuggets = await $fetch<Nugget[]>("/api/nuggets/");

  const slug = getRouterParam(event, "slug");

  return nuggets.find((nugget) => nugget.slug === slug);
});
