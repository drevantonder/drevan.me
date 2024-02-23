// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/test-utils/module",
  ],
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    notionToken: "",
  },
  imports: {
    dirs: ["schema"],
  },
  nitro: {
    imports: {
      dirs: ["schema", "utils"],
    },
  },
});
