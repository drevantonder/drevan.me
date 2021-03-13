<template>
  <div class="lg:hidden">
    <div class="fixed z-30 bottom-0 right-0 p-6">
      <button
        class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-500"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6 text-teal-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!showMenu"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <div
      v-show="showMenu"
      class="fixed z-10 inset-0 bg-teal-100 bg-opacity-10 blur"
      @click="closeMenu"
    />
    <div
      v-show="showMenu"
      class="fixed z-20 bottom-0 inset-x-0 flex flex-col space-y-6 bg-white dark:bg-gray-900 p-6"
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
      <page-nav-color-scheme class="mr-auto" />
    </div>
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

  data: () => ({
    showMenu: false,
  }),

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    },
  },
}
</script>

<style lang="postcss" scoped>
.blur {
  backdrop-filter: blur(3px);
}

li {
  &::before {
    content: '➜';
    @apply text-teal-400 font-medium text-xl mr-2;
  }
}
</style>
