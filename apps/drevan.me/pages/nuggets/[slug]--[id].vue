<script setup lang="ts">
import type { Nugget } from "@drevan/sanity/sanity.types";

const route = useRoute();

const query = groq`*[_type == "nugget" && _id == $id]{...,author->}[0]`;
const { data: nugget, status } = useSanityQuery<Nugget>(query, {
  id: route.params.id,
});
</script>

<template>
  <div class="container mx-auto mt-32">
    <NuggetCard :nugget="nugget" :status="status" />
  </div>
</template>
