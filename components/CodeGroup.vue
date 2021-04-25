<template>
  <div :class="`code-group ${activeTab === tabs[0] && 'first-tab'}`">
    <div class="-mb-2 flex space-x-1">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="`rounded-t-lg text-lg font-semibold px-3 py-1 
          focus:outline-none focus:ring-2 focus:ring-teal-500
        ${
          activeTab === tab
            ? 'bg-gray-100 dark:bg-gray-800 text-teal-500'
            : 'text-gray-400'
        }`"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <slot :activeTab="activeTab" />
  </div>
</template>

<script>
export default {
  props: {
    startTab: {
      type: String,
      default: null,
    },

    tabs: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeTab: this.startTab || this.tabs[0],
    }
  },
}
</script>

<style lang="postcss">
.code-group.first-tab {
  pre[class*='language-'] {
    @apply rounded-tl-none;
  }
}
</style>
