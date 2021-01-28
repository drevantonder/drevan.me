<template>
  <div class="flex flex-col xl:flex-row max-w-screen-2xl mx-auto px-4 md:px-8">
    <div
      class="flex mt-8 xl:mt-0 xl:min-h-screen items-center flex-shrink w-full"
    >
      <article class="prose prose-xl lg:prose-2xl">
        <h1>Hello 👋</h1>
        <h2>My name is Andre van Tonder.</h2>
        <p>
          I am a Christian ⛪, Software Developer 💻 and Star Wars fan 🌌. I
          love learning new things and meeting new people.
        </p>
        <p>
          I currently work full time at
          <a href="https://creation.com" target="_blank">
            Creation Ministries International</a
          >. I enjoy coding on personal projects and freelancing in my spare
          time.
        </p>
        <p>
          Oh, and before I forget, you can find me on
          <a href="https://github.com/DrevanTonder" target="_blank">Github</a>,
          <a href="https://twitter.com/DrevanTonder" target="_blank">Twitter</a
          >, and
          <a
            href="https://stackoverflow.com/users/5403882/drevantonder?tab=profile"
            target="_blank"
          >
            Stackoverflow</a
          >.
        </p>
        <p>
          While you are here, feel free to check out some of my articles
          <span class="hidden lg:inline">➡</span>
          <span class="inline lg:hidden">⬇</span>.
        </p>
      </article>
    </div>
    <aside class="flex flex-col items-center w-full mt-8 xl:mt-24 xl:ml-4">
      <article
        class="xl:max-w-sm w-full p-8 bg-white gradient-border shadow-xl rounded-lg"
      >
        <time datetime="2021-01-26" class="uppercase font-medium text-gray-500">
          26 Dec, 2021
        </time>
        <h3 class="text-3xl font-semibold text-gray-700">My Awesome List</h3>
        <p class="mt-2 text-lg font-normal text-gray-500">
          A whole lot of stuff I find awesome and I just have to tell you about.
        </p>
      </article>
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.gradient-border {
  @apply relative bg-clip-padding border-2 border-transparent;
}

.gradient-border:before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 -m-0.5 -z-1 rounded-inherit;
}
</style>
