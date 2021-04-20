const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles').fetch()
  for (const article of articles) {
    routes.push(`/${article.slug}`)
  }
  return routes
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Andre van Tonder',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Andre van Tonder's personal website ✨ and blog 📚.",
      },
      { name: 'msapplication-TileColor', content: '#0ea5e9' },
      { name: 'theme-color', content: '#0ea5e9' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    // Dark mode script in head to avoid FOUC
    script: [
      {
        hid: 'dark-mode-script',
        innerHTML: `
        if (
          localStorage.theme === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'dark-mode-script': ['innerHTML'],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/content.css',
    '@fontsource/karla/variable.css',
    '@fontsource/karla/variable-italic.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // Doc: https://github.com/moritzsternemann/vue-plausible
    'vue-plausible',
    // Doc: https://sentry.nuxtjs.org/
    '@nuxtjs/sentry',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkAutolinkHeadings: {
        linkProperties: {
          className: 'heading-link',
          ariaLabel: 'Link to this heading',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },

  // Sitemap config
  sitemap: {
    hostname: 'https://drevan.me',
    gzip: true,
    routes: createSitemapRoutes,
  },

  plausible: {
    domain: 'drevan.me',
  },

  tailwindcss: {
    jit: true,
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    tracing: true,
    config: {},
  },
}
