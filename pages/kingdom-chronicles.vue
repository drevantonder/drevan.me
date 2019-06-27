<template>
  <div style="display: flex;">
    <div style="width: 50%;">
      <a class="button is-large" style="width: 100%; height: 50vh;" :class="{ 'is-primary': !buttons.includes('a') }" @click="pressButton('A')">A</a>
      <a class="button is-large " style="width: 100%; height: 50vh;" :class="{ 'is-info': !buttons.includes('b') }" @click="pressButton('B')">B</a>
    </div>
    <div style="width: 50%;">
      <a class="button is-large" style="width: 100%; height: 50vh;" :class="{ 'is-success': !buttons.includes('c') }" @click="pressButton('C')">C</a>
      <a class="button is-large " style="width: 100%; height: 50vh;" :class="{ 'is-danger': !buttons.includes('d') }" @click="pressButton('D')">D</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',

  // async asyncData({ $axios }) {
  //   const buttons = await $axios.$get('/kingdom-chronicles')
  //   return { buttons }
  // },

  data () {
    return {
      buttons: []
    }
  },

  mounted() {
    setInterval(this.update, 100)
  },

  methods: {
    async pressButton(letter) {
      const buttons = await this.$axios.$get('/kingdom-chronicles/' + letter)
      this.buttons = buttons
    },

    async update() {
      const buttons = await this.$axios.$get('/kingdom-chronicles/')
      this.buttons = buttons
    }
  }
}
</script>
