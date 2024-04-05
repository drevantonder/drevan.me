<script setup lang="ts">
import { NuggetCard } from "#components";
import type { Nugget, Book, Music, Person } from "@drevan/sanity/sanity.types";

const query = groq`*[_type == "nugget"]` + NuggetCard.groqProjection;
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
    <div class="flex flex-wrap gap-x-24 gap-y-16 mt-24 place-content-center">
      <div
        v-for="(nugget, index) in nuggets"
        :key="nugget._id"
        class="flex items-center justify-center"
      >
        <NuggetCard
          :nugget="nugget"
          :status="status"
          :class="{
            '-rotate-1': index % 2 === 0,
            'rotate-2': index % 2 !== 0,
          }"
        />
      </div>
    </div>
  </Container>
</template>
