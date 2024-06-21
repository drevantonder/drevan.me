<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
  }>(),
  {
    as: "section",
  }
);
</script>

<template>
  <Section
    :as
    class="prose prose-lg dark:prose-invert prose-neutral mx-auto prose-headings:font-serif prose-a:decoration-persian"
  >
    <slot />
  </Section>
</template>
