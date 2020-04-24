<template>
  <div class="min-h-screen flex flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-2xl">
      <g-image 
        :src="imageURL" 
        class="rounded-full shadow-xl mx-auto h-24"
      />
      <h1 class="text-5xl text-gray-100 text-center font-medium tracking-tight leading-tight">
        {{ blok.name }}
      </h1>
      <h2 class="text-2xl text-gray-200 text-center leading-tight">
        {{ blok.text }}
      </h2>
      <div class="flex flex-col md:flex-row justify-center mt-4 space-x-0 space-y-2 sm:space-y-0 sm:space-x-4">
        <a
          v-for="link in blok.links"
          :key="link.uuid"
          v-editable="link"
          :href="link.link.url"
          class="bg-gray-100 px-3 py-1 rounded-lg font-medium text-white shadow"
          :style="`background: ${link.color}`"
        ><fa-icon 
          class="mr-2" 
          :icon="[link.icon[0].type, link.icon[0].icon]" 
        />{{ link.text }}</a>
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
      return require('!!assets-loader?width=96&quality=100&fit=inside!~/' + path)
    }
  }
}
</script>