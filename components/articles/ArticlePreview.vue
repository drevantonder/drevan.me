<template>
  <article class="p-8 bg-white gradient-border shadow-xl rounded-lg">
    <time datetime="2021-01-26" class="uppercase font-medium text-gray-500">
      26 Dec, 2021
    </time>
    <nuxt-link :to="`/${article.slug}/`">
      <h3 class="text-3xl font-semibold text-gray-700">{{ article.title }}</h3>
    </nuxt-link>
    <nuxt-link :to="`/${article.slug}/`">
      <p class="mt-2 text-lg font-normal text-gray-500">
        {{ article.description }}
      </p>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="postcss">
.gradient-border {
  @apply relative bg-clip-padding border-2 border-transparent;
}

.gradient-border:before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 -m-0.5 -z-1 rounded-inherit;
}
</style>
