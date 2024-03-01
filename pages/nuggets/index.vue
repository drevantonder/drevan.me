<script setup lang="ts">
const { data: nuggets, status } = useLazyFetch<Nugget[]>("/api/nuggets");
</script>

<template>
  <Container>
    <div class="flex flex-wrap gap-x-24 gap-y-16 mt-24 place-content-center">
      <div
        v-for="(nugget, index) in nuggets"
        :key="nugget.id"
        class="flex items-center justify-center"
      >
        <NuggetCard
          :nugget="nugget"
          :pending="status === 'pending'"
          :class="{
            '-rotate-1': index % 2 === 0,
            'rotate-2': index % 2 !== 0,
          }"
        />
      </div>
    </div>
  </Container>
</template>
