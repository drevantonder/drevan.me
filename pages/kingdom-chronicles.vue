<template>
  <div style="display: flex;">
    <div style="width: 50%;">
      <a class="button is-large" style="width: 100%; height: 50vh;" :class="{ 'is-primary': a }" @click="pressButton('A')" :style="{ 'text-decoration': !a ? 'line-through' : undefined }">A - Front Lights</a>
      <a class="button is-large " style="width: 100%; height: 50vh;" :class="{ 'is-info': b }" @click="pressButton('B')" :style="{ 'text-decoration': !b ? 'line-through' : undefined }">B - Stage Lights</a>
    </div>
    <div style="width: 50%;">
      <a class="button is-large" style="width: 100%; height: 50vh;" :class="{ 'is-success': c }" @click="pressButton('C')" :style="{ 'text-decoration': !c ? 'line-through' : undefined }">C - Hall Lights</a>
      <a class="button is-large " style="width: 100%; height: 50vh;" :class="{ 'is-danger': d }" @click="pressButton('D')">D - All Lights Off</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',

  async asyncData({ $axios }) {
    const buttons = await $axios.$get('/kingdom-chronicles')
    return { buttons }
  },

  mounted() {
    setTimeout(this.update, 10)
  },

  methods: {
    async pressButton(letter) {
      const buttons = await this.$axios.$get('/kingdom-chronicles/' + letter)
      this.buttons = buttons
    },

    async update() {
      const buttons = await this.$axios.$get('/kingdom-chronicles/')
      this.buttons = buttons

      setTimeout(this.update, 10)
    }
  },

  computed: {
    a: function () {
      return this.buttons.includes('a')
    },

    b: function () {
      return this.buttons.includes('b')
    },

    c: function () {
      return this.buttons.includes('c')
    },

    d: function () {
      return this.buttons.includes('d')
    }
  }
}
</script>
