<script setup lang="ts">
const route = useRoute();
const { data: nugget } = await useFetch<Nugget>(
  `/api/nuggets/${route.params.id}`
);

if (!nugget.value) {
  throw createError({ statusCode: 404, message: "Nugget not found" });
}
</script>

<template>
  <div class="container mx-auto mt-32">
    <h1>{{ nugget.text }}</h1>
  </div>
</template>
