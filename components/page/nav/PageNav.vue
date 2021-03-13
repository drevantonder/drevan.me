<template>
  <nav
    class="fixed bottom-0 lg:inset-y-0 inset-x-0 lg:right-auto lg:left-0 bg-teal-50 lg:bg-transparent bg-opacity-80 lg:bg-opacity-100 py-1 lg:py-20 lg:pl-4 z-10 lg:z-0 shadow-xl lg:shadow-none"
  >
    <ul
      class="flex flex-row lg:flex-col justify-around lg:justify-start space-x-6 lg:space-x-0 lg:space-y-6"
    >
      <li>
        <nuxt-link
          to="/"
          class="text-gray-700 dark:text-gray-400 font-medium text-base lg:text-xl flex flex-col lg:flex-row items-center lg:items-start"
        >
          <span class="text-xl lg:text-2xl">🏡</span>&nbsp;Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/articles"
          class="text-gray-700 dark:text-gray-400 font-medium text-base lg:text-xl flex flex-col lg:flex-row items-center lg:items-start"
        >
          <span class="text-xl lg:text-2xl">📚</span>&nbsp;Articles
        </nuxt-link>
      </li>
    </ul>
    <page-nav-color-scheme class="mt-6" />
  </nav>
</template>
