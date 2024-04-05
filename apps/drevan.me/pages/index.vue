<script setup lang="ts">
import { NuggetCard } from "#components";
import type { Nugget, Book, Music, Person } from "@drevan/sanity/sanity.types";

const query =
  groq`*[_type == "nugget"]| order(displayedId desc)[0...4]` +
  NuggetCard.groqProjection;
const { data: nuggets, status } = useSanityQuery<
  (Omit<Nugget, "book" | "author" | "music"> & {
    book?: Book;
    author?: Person;
    music?: Music;
  })[]
>(query);
</script>

<template>
  <Container>
    <h1 class="sr-only">André van Tonder</h1>
    <div class="container mx-auto mt-16 sm:mt-48">
      <div class="prose prose-lg dark:prose-invert">
        <p>Hey you! 👋</p>

        <p>Welcome to my public space! 🫡</p>

        <p>
          I'm <b>André van Tonder</b> or <b>“drevan”</b>, a weird Christian guy
          who can't sit still. Have fun exploring my world!
        </p>

        <p>Take care! ❤️</p>
      </div>
    </div>

    <div>
      <div
        class="container mx-auto mt-16 sm:mt-48 flex justify-between items-center"
      >
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
        class="flex flex-col lg:flex-row justify-between items-center container mx-auto mt-4 gap-y-6 gap-x-4"
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
  </Container>
</template>
