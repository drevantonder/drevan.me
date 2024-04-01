<script setup lang="ts">
import type { NuxtLinkOptions } from "#app";

defineProps<NuxtLinkOptions>();
</script>

<template>
  <NuxtLink class="decoration-persian underline" v-bind="$props">
    <slot />
  </NuxtLink>
</template>
