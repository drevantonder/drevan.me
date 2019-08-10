<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title has-text-white-ter is-1">
        drevantonder.io
      </h1>
      <h2 class="subtitle has-text-white-ter is-4">
        Andre van Tonder&#39;s personal site
      </h2>
      <div class="links">
        <a
          href="https://stackoverflow.com/users/5403882/drevantonder"
          class="button is-medium is-warning is-outlined"
        >Stackoverflow</a>
        <a
          href="https://github.com/DrevanTonder"
          class="button is-medium is-primary is-outlined"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })

      let document = {}
      const result = await api.getSingle('homepage')
      document = result.data

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
