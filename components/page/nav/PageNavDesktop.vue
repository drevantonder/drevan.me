<template>
  <div
    class="hidden lg:flex flex-col fixed justify-start inset-y-0 right-auto left-0 pt-20 pb-4 pl-4"
  >
    <ul class="space-y-6">
      <li v-for="navItem in nav.items" :key="navItem.to">
        <nuxt-link
          :to="navItem.to"
          class="text-gray-700 dark:text-gray-400 font-medium text-xl"
          >{{ navItem.text }}
        </nuxt-link>
      </li>
    </ul>
    <page-nav-color-scheme class="mt-auto" />
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
li {
  &::before {
    content: '➜';
    @apply text-teal-400 font-medium text-xl mr-2;
  }
}
</style>
