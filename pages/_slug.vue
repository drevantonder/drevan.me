<template>
  <page-content>
    <article class="prose prose-xl lg:prose-2xl">
      <nuxt-content :document="article" />
    </article>
    <div class="grid grid-cols-2 gap-8">
      <article-preview
        v-for="article in articles"
        :key="article._id"
        :article="article"
      />
    </div>
  </page-content>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const articles = await $content('articles').fetch()

    return {
      article,
      articles,
    }
  },
})
</script>
