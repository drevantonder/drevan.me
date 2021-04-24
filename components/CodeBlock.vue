<template>
  <div v-show="active">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      required: true,
    },
  },

  computed: {
    active() {
      // Using $parent is not recommended, however slotsProps don't work in @nuxt/content
      // SSee: https://content.nuxtjs.org/writing#templates
      return this.$parent.activeTab === this.tab
    },
  },
}
</script>
