<template>
  <page-content>
    <h1 class="sr-only">{{ intro.h1 }}</h1>
    <div class="flex relative">
      <article class="content">
        <p class="fake-h1">{{ intro.wave }}</p>
        <h2>{{ intro.h2 }}</h2>
        <nuxt-content :document="intro" />
      </article>
      <div
        class="hidden absolute lg:flex items-center -right-8 inset-y-0 transform-gpu translate-x-full"
      >
        <img
          class="max-h-full"
          src="~/assets/img/me-big.png"
          alt="Andre van Tonder"
        />
      </div>
    </div>
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

  mounted() {
    throw new Error('test')
  },
})
</script>
