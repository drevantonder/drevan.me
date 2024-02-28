<script setup lang="ts">
const route = useRoute();
const {
  data: nugget,
  pending,
  error,
} = await useLazyFetch<Nugget>(`/api/nuggets/${route.params.id}`);
</script>

<template>
  <div class="container mx-auto mt-32">
    <NuggetCard :nugget="nugget" :pending="pending" />
  </div>
</template>
