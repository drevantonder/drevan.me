<template>
  <article class="group">
    <nuxt-link :to="`/${article.slug}/`">
      <h3
        class="text-2xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200"
      >
        {{ article.title }}
      </h3>
      <p class="mt-2 text-xl font-normal text-gray-500 dark:text-gray-400">
        {{ article.description }}
      </p>
      <div class="flex items-center mt-2">
        <p class="text-lg font-semibold text-gray-900 dark:text-gray-200">
          Read more
        </p>
        <svg
          class="transition transform w-5 h-5 text-teal-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
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
