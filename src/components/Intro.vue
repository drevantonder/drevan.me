<template>
  <div class="min-h-screen flex flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-xl">
      <g-image 
        :src="blok.image" 
        width="100" 
        class="rounded-full shadow-xl mx-auto"
      />
      <h1 class="text-5xl text-white text-center font-medium tracking-tight">
        {{ blok.name }}
      </h1>
      <h2 class="text-3xl text-white text-center">
        {{ blok.text }}
      </h2>
      <div class="flex justify-around mt-3">
        <a
          v-for="link in blok.links"
          :key="link.uuid"
          v-editable="link"
          :href="link.link.url"
          class="text-blue-600 bg-white px-6 py-3 rounded-lg text-lg font-medium"
        >{{ link.text }}</a>
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
  }
}
</script>