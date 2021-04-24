<template>
  <div
    class="transition-colors duration-700 bg-white dark:bg-gray-900 min-h-screen"
  >
    <page-nav />
    <Nuxt />
  </div>
</template>

<style lang="postcss">
::selection {
  @apply bg-purple-600;
}
</style>
