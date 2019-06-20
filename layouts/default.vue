<template>
  <div>
    <background />
    <nuxt />
  </div>
</template>

<script>
import Background from '~/components/Background.vue'

export default {
  components: {
    Background
  }
}
</script>

<style lang="scss">
@import "~assets/main.scss";
</style>
