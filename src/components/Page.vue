<template>
  <div>
    <code-background v-if="blok.has_code_background" />
    <component
      :is="child_blok.component"
      v-for="child_blok in blok.body"
      :key="child_blok._uid"
      v-editable="child_blok"
      :blok="child_blok"
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