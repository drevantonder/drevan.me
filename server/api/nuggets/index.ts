export default defineEventHandler(async (event) => {
  return Nuggets.readAllItems();
});
