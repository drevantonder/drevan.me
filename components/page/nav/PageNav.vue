<template>
  <nav class="fixed inset-y-0 right-auto left-0 py-20 pl-4">
    <ul class="space-y-6">
      <li>
        <nuxt-link
          to="/"
          class="text-gray-700 dark:text-gray-400 font-medium text-xl"
          >Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/articles"
          class="text-gray-700 dark:text-gray-400 font-medium text-xl"
          >Articles
        </nuxt-link>
      </li>
    </ul>
    <page-nav-color-scheme class="mt-6" />
  </nav>
</template>

<style lang="postcss" scoped>
li {
  &::before {
    content: '➜';
    @apply text-teal-400 font-medium text-xl mr-2;
  }
}
</style>
