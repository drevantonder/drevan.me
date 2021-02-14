<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <article-preview
      v-for="article in articles"
      :key="article._id"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
})
</script>
