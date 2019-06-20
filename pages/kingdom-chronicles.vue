<template>
  <div style="display: flex;">
    <div style="width: 50%;">
      <a class="button is-large is-primary" style="width: 100%; height: 50vh;" :class="{ 'is-outlined': !buttons.includes('a') }" @click="pressButton('A')">A</a>
      <a class="button is-large is-info" style="width: 100%; height: 50vh;" :class="{ 'is-outlined': !buttons.includes('b') }" @click="pressButton('B')">B</a>
    </div>
    <div style="width: 50%;">
      <a class="button is-large is-success" style="width: 100%; height: 50vh;" :class="{ 'is-outlined': !buttons.includes('c') }" @click="pressButton('C')">C</a>
      <a class="button is-large is-danger" style="width: 100%; height: 50vh;" :class="{ 'is-outlined': !buttons.includes('d') }" @click="pressButton('D')">D</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'blank',

  async asyncData() {
    const buttons = await axios.get('/api/kingdom-chronicles')
    return { buttons }
  },

  mounted() {
    setInterval(this.update, 100)
  },

  methods: {
    async pressButton(letter) {
      const buttons = await axios.get('/api/kingdom-chronicles/' + letter)
      this.buttons = buttons
    },

    async update() {
      const buttons = await axios.get('/api/kingdom-chronicles/')
      this.buttons = buttons
    }
  }
}
</script>
