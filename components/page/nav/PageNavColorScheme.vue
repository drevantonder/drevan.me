<template>
  <button
    class="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-lg inline-flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-teal-500"
    @click="cycleDarkMode"
  >
    <svg
      class="w-6 h-6 inline text-gray-600 dark:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        v-if="currentMode === 'light'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
      <path
        v-else-if="currentMode === 'dark'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
      <path
        v-else-if="currentMode === 'system'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <span class="text-gray-800 dark:text-gray-300 font-medium">{{
      darkModeCycleText
    }}</span>
  </button>
</template>

<script>
export default {
  data: () => ({
    darkModeCycle: ['light', 'dark', 'system'],
    currentMode: 'system',
  }),

  computed: {
    darkModeCycleText() {
      return (
        this.currentMode.charAt(0).toUpperCase() + this.currentMode.slice(1)
      )
    },
  },

  watch: {
    currentMode() {
      if (this.currentMode === 'system') {
        localStorage.removeItem('theme')
      } else {
        localStorage.theme = this.currentMode
      }

      const isDarkMode =
        this.currentMode === 'dark' ||
        (this.currentMode === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      const theme = isDarkMode ? 'dark' : 'light'

      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },

  mounted() {
    this.currentMode = localStorage.theme ?? 'system'
  },

  methods: {
    cycleDarkMode() {
      const currentModeIndex = this.darkModeCycle.indexOf(this.currentMode)
      const newModeIndex = (currentModeIndex + 1) % this.darkModeCycle.length
      this.currentMode = this.darkModeCycle[newModeIndex]
    },
  },
}
</script>
