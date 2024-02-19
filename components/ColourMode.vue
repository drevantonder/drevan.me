<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <button type="button" @click="colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'">
    <Icon :name="colorMode.value === 'dark' ? 'ph:sun-duotone' : 'ph:moon-duotone'" class="text-neutral-900 dark:text-neutral-50 size-5" />
  </button>
</template>

