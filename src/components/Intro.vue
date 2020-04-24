<template>
  <div class="min-h-screen flex flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-2xl flex">
      <div>
        <g-image 
          :src="imageURL" 
          width="64" 
          class="rounded-full shadow-xl mx-auto"
        />
      </div>
      <div>
        <h1 class="text-5xl text-gray-100 text-center font-medium tracking-tight leading-tight">
          {{ blok.name }}
        </h1>
        <h2 class="text-2xl text-gray-200 text-center leading-tight">
          {{ blok.text }}
        </h2>
        <div class="flex justify-around mt-6">
          <a
            v-for="link in blok.links"
            :key="link.uuid"
            v-editable="link"
            :href="link.link.url"
            class="text-blue-600 bg-gray-100 px-6 py-3 rounded-lg text-lg font-medium"
          >{{ link.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageURL () {
      // When options.downloadImages is false, the image property is a string
      if (typeof this.blok.image === 'string') {
        return this.blok.image
      }

      // When options.downloadImages is true, the image property is a object
      // Reference of this: https://github.com/gridsome/gridsome/issues/292
      const path = this.blok.image.path
      return require('!!assets-loader?width=64&quality=100&fit=inside!~/' + path)
    }
  }
}
</script>