<script lang="ts" setup>
const props = defineProps<{
  content: ContentItem;
}>();
</script>

<template>
  <NuxtLink :to="`/content/${props.content.slug}--${props.content.id}`" class="decoration-persian underline">
    <ContentIcon :content="content" />
    {{ props.content.title }}
  </NuxtLink>
</template>
