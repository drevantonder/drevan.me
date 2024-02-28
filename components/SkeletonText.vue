<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = withDefaults(
  defineProps<{
    lines: number;
    type?: "paragraph" | "title";
    uppercase?: boolean;
    class?: string;
  }>(),
  {
    lines: 1,
    type: "paragraph",
    uppercase: false,
    class: "",
  }
);

const lineLengths = computed(() => {
  return {
    paragraph: ["w-full", "w-3/4", "w-full", "w-1/2"],
    title: ["w-full", "w-1/4", "w-2/3", "w-1/2"],
  }[props.type];
});

const _class = twMerge("inline-block w-full", props.class);
</script>

<template>
  <div :class="_class">
    <div
      v-for="line in lines"
      :key="line"
      class="flex h-[1lh] items-end justify-stretch"
      :class="lineLengths[(line - 1) % lineLengths.length]"
    >
      <div
        class="w-full animate-pulse rounded-full bg-neutral-300"
        :class="uppercase ? 'h-[1lh]' : 'h-[0.6em]'"
      />
    </div>
  </div>
</template>
