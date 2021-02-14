<template>
  <page-content>
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
