export default defineEventHandler(async (event) => {
  const nuggets = await $fetch<Nugget[]>("/api/nuggets/");

  const id = getRouterParam(event, "id");

  console.log(id);

  return nuggets.find((nugget) => nugget.id === id);
});
