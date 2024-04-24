export default defineEventHandler(async (event) => {
  return new Response("You've been added! 🎉", { status: 200 });
});
