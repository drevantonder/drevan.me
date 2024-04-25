export default defineEventHandler(async (event) => {
  const formData = await readFormData(event);

  const firstName = formData.get("firstName");
  const email = formData.get("email");

  const { mailchimpServerPrefix, mailchimpApiKey, mailchimpListId } =
    useRuntimeConfig(event);

  // Add subscriber to Mailchimp
  try {
    await $fetch(
      `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " +
            Buffer.from(`apikey:${mailchimpApiKey}`).toString("base64"),
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
          },
        }),
      }
    );
  } catch (error) {
    const message = getErrorMessage(error);

    return new Response(
      `An error occured trying to add you as a subscriber. You may already be a subscriber. Error: ${message}`,
      {
        status: 500,
      }
    );
  }

  return new Response("You've been added! 🎉", { status: 200 });
});
