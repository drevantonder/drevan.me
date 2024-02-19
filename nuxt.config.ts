// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  css: [
    '~/assets/main.css'
  ],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: ''
  }
})
