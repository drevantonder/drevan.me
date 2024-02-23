export default defineEventHandler(async (event) => {
  return await Nuggets.readAllItems();
});
