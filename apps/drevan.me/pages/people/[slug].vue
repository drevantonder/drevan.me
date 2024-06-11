<script setup lang="ts">
import type { Book, Music, Nugget, Person } from "@drevan/sanity/sanity.types";
import { NuggetCard } from "#components";

const route = useRoute();

const query =
  groq`*[_type == "person" && slug.current == $slug]{..., "nuggets": *[_type=='nugget' && references(^._id)]` +
  NuggetCard.groqProjection +
  `}[0]`;
const { data: person, status } = useSanityQuery<
  Person & {
    nuggets: (Omit<Nugget, "book" | "author" | "music"> & {
      book?: Book;
      author?: Person;
      music?: Music;
    })[];
  }
>(query, {
  slug: route.params.slug,
});
</script>

<template>
  <div class="container mx-auto mt-32">
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">Error</div>
    <div v-else-if="status === 'success' && person">
      <h1 class="text-4xl font-bold">{{ person.name }}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <NuggetCard
          v-for="nugget in person.nuggets"
          :key="nugget._id"
          :nugget="nugget"
        />
      </div>
    </div>
  </div>
</template>
