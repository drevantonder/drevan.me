<template>
  <div>
    <code-background v-if="blok.has_code_background" />
    <component
      :is="blok.component"
      v-for="child_blok in blok.body"
      :key="child_blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script>
import CodeBackground from './CodeBackground.vue'

export default {
  components: {
    CodeBackground
  },

  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>