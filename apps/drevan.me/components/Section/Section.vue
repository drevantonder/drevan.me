<script setup lang="ts">
withDefaults(
  defineProps<{
    as: string;
  }>(),
  {
    as: "section",
  }
);
</script>

<template>
  <component :is="as" class="first:mt-6 py-6">
    <slot />
  </component>
</template>
