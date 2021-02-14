<template>
  <page-content>
    <article class="prose prose-xl lg:prose-2xl">
      <nuxt-content :document="intro" />
    </article>
    <article-grid :articles="articles" />
  </page-content>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const intro = await $content('home/intro').fetch()

    const articles = await $content('articles').fetch()

    return {
      intro,
      articles,
    }
  },
})
</script>
