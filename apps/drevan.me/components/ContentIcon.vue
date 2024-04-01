<script lang="ts" setup>
const props = defineProps<{
  content: ContentItem;
}>();

const icon = computed(
  () =>
    ({
      book: "ph:book-duotone",
      song: "ph:music-note-duotone",
    }[props.content.type])
);
</script>

<template><Icon :name="icon" /></template>
