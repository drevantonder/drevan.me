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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #242E4F;
  overflow-y: auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
