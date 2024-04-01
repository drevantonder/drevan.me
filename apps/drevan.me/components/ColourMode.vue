<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <button type="button" @click="colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'" class="p-2 rounded-md hover:bg-[#f5e8e5] dark:hover:bg-neutral-900">
    <Icon :name="colorMode.value === 'dark' ? 'ph:sun-duotone' : 'ph:moon-duotone'" class="text-neutral-900 dark:text-neutral-50 size-5" />
  </button>
</template>

