<template>
  <div
    class="bg-white dark:bg-gray-900 min-h-screen transition-background-color duration-700"
  >
    <page-nav />
    <Nuxt />
  </div>
</template>

<style lang="postcss">
::selection {
  @apply bg-purple-700 dark:bg-purple-600 text-white;
}
</style>
