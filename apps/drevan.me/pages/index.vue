<script setup lang="ts">
import type { Nugget } from "sanity/sanity.types";

const query = groq`*[_type == "nugget"]{...,author->}[0...5]`;
const { data: nuggets, status } = useSanityQuery<Nugget[]>(query);
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
        class="flex justify-between items-center container mx-auto mt-4 gap-4"
      >
        <NuggetCard
          v-for="(nugget, index) in nuggets"
          :key="nugget._id"
          :class="{
            '-rotate-1': index % 2 === 0,
            'rotate-2': index % 2 !== 0,
          }"
          :nugget="nugget"
          :status="status"
        />
      </div>
    </div>
  </div>
</template>
