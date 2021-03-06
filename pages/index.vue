<template>
  <page-content>
    <h1 class="sr-only">{{ intro.h1 }}</h1>
    <div class="flex relative">
      <article class="prose prose-xl lg:prose-2xl">
        <p class="fake-h1">{{ intro.wave }}</p>
        <h2>{{ intro.h2 }}</h2>
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

<style lang="postcss" scoped>
.fake-h1 {
  @apply text-gray-900;
  font-weight: 800;
  font-size: 2.8em;
  margin-bottom: 0.8571429em;
  line-height: 1;
}
@screen lg {
  .fake-h1 {
    font-size: 2.6666667em;
    margin-bottom: 0.875em;
    line-height: 1;
  }
}
</style>
