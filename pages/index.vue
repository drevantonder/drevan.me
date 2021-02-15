<template>
  <page-content>
    <div class="flex relative">
      <article class="prose prose-xl lg:prose-2xl">
        <nuxt-content :document="intro" />
      </article>
      <div
        class="absolute flex items-center -right-8 inset-y-0 transform-gpu translate-x-full"
      >
        <img
          class="max-h-full"
          src="~/assets/img/me-big.png"
          alt="Andre van Tonder"
        />
      </div>
    </div>
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
