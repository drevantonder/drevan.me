// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/test-utils/module",
    "@nuxtjs/sanity",
  ],
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: "",
  },
  sanity: {
    projectId: "d78c8n0s",
  },
  vite: {
    optimizeDeps: {
      // sanity client dep
      include: [
        "@nuxtjs/sanity > @sanity/client > get-it > parse-headers",
        "@nuxtjs/sanity > @sanity/client > get-it > debug",
      ],
    },
  },
  app: {
    head: {
      templateParams: {
        separator: "•",
      },
    },
  },
  site: {
    url: "https://drevan.me",
    name: "André van Tonder",
    description:
      "I'm André van Tonder or “drevan”, a weird Christian guy who can't sit still. Have fun exploring my world!",
    defaultLocale: "en",
  },
  runtimeConfig: {
    mailchimpApiKey: process.env.NUXT_MAILCHIMP_API_KEY,
    mailchimpServerPrefix: process.env.NUXT_MAILCHIMP_SERVER_PREFIX,
    mailchimpListId: process.env.NUXT_MAILCHIMP_LIST_ID,
  },
  nitro: {
    preset: "cloudflare-pages",
  },
  ogImage: { enabled: false },
});
