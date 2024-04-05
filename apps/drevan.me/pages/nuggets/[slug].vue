<script setup lang="ts">
import { NuggetCard } from "#components";
import type { Nugget, Book, Music, Person } from "@drevan/sanity/sanity.types";

const route = useRoute();

const query =
  groq`*[_type == "nugget" && slug.current == $slug][0]` +
  NuggetCard.groqProjection;
const { data: nugget, status } = useSanityQuery<
  Omit<Nugget, "book" | "author" | "music"> & {
    book?: Book;
    author?: Person;
    music?: Music;
  }
>(query, {
  slug: route.params.slug,
});
</script>

<template>
  <div class="container mx-auto mt-32">
    <NuggetCard :nugget="nugget" :status="status" />
  </div>
</template>
