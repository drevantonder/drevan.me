<template>
  <page-content>
    <article class="content">
      <nuxt-content :document="article" />
    </article>
    <section v-if="articles.length">
      <h2 class="font-bold text-lg uppercase tracking-wider text-teal-600">
        Keep Reading
      </h2>
      <article-grid :articles="articles" />
    </section>
  </page-content>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const articles = await $content('articles')
      .where({ slug: { $ne: params.slug } })
      .fetch()

    return {
      article,
      articles,
    }
  },
})
</script>
