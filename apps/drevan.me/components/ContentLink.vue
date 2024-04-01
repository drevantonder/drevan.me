<script lang="ts" setup>
const props = defineProps<{
  content: ContentItem;
}>();
</script>

<template>
  <MyLink :to="`/content/${props.content.slug}--${props.content.id}`">
    <ContentIcon :content="content" />
    {{ props.content.title }}
  </MyLink>
</template>
