<template>
  <page-content>
    <article class="prose prose-xl lg:prose-2xl">
      <nuxt-content :document="article" />
    </article>
    <article-grid :articles="articles" />
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
