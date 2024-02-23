<script setup lang="ts">
const { data: nuggets } = await useFetch<Nugget[]>("/api/nuggets/");
</script>

<template>
  <div>
    <h1 class="sr-only">Andre van Tonder</h1>
    <div class="container mx-auto mt-48">
      <div class="prose prose-lg dark:prose-invert">
        <p>Hey you! 👋</p>

        <p>Welcome to my public space! 🫡</p>

        <p>
          I'm <b>Andre van Tonder</b> or <b>“drevan”</b>, a weird Christian guy
          who can't sit still. Have fun exploring my world!
        </p>

        <p>Take care! ❤️</p>
      </div>
    </div>

    <div>
      <div class="container mx-auto mt-48 flex justify-between items-center">
        <h2
          class="uppercase text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-700"
        >
          Freshly Baked Nuggets
        </h2>

        <NuxtLink
          to="/nuggets"
          class="decoration-persian underline font-medium text-sm text-neutral-900 dark:text-neutral-100"
        >
          More nuggets this way &rarr;
        </NuxtLink>
      </div>

      <div
        class="grid grid-rows-1 auto-cols-max grid-flow-col container mx-auto mt-4 gap-16"
      >
        <NuxtLink
          v-for="(nugget, index) in nuggets"
          :key="nugget.id"
          :to="`/nuggets/${nugget.slug}`"
          class="block prose dark:prose-invert prose-xl max-w-xs bg-neutral-100 dark:bg-neutral-900 px-4 -mx-4 rounded-xl py-3 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
          :class="{
            '-rotate-1': index % 2 === 0,
            'rotate-2': index % 2 !== 0,
          }"
        >
          <p>{{ nugget.text }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
