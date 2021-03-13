<template>
  <page-content>
    <section>
      <h1 class="font-extrabold text-gray-900 text-6xl mb-4">My Articles</h1>
      <p class="text-xl text-gray-500 leading-relaxed">
        Not much here yet. I need to put my writing gloves on 😁.
      </p>
    </section>
    <section>
      <h2 class="font-bold text-lg uppercase tracking-wider text-teal-600">
        Featured Articles
      </h2>
      <article-grid class="mt-4" :articles="articles" />
    </section>
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
