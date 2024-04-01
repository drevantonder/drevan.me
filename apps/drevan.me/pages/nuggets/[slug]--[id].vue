<script setup lang="ts">
const route = useRoute();
const { data: nugget, status } = await useLazyFetch<Nugget>(
  `/api/nuggets/${route.params.id}`
);
</script>

<template>
  <div class="container mx-auto mt-32">
    <NuggetCard :nugget="nugget" :status="status" />
  </div>
</template>
