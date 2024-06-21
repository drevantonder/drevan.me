<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

const route = useRoute();

const query = groq`*[_type == "post" && slug.current == $slug]{...,author->}[0]`;
const { data: post, status } = useSanityQuery(query, {
  slug: route.params.slug,
});
</script>

<template>
  <Container>
    <div class="container mx-auto mt-16 md:mt-32">
      <div v-if="status === 'pending'">Loading...</div>
      <div v-else-if="status === 'error'">Error</div>
      <div
        v-else-if="status === 'success' && post"
        class="max-w-prose text-lg mx-auto"
      >
        <div class="flex gap-2 text-sm">
          <span class="decoration-persian underline">{{
            postCategories[post.category]
          }}</span>
          <span>·</span>
          <span>{{ formatDateByLocale("en", post._createdAt) }}</span>
        </div>
        <h1 class="mt-3 text-4xl sm:text-5xl font-bold font-serif">
          {{ post.title }}
        </h1>
        <p class="mt-3 text-lg text-neutral-700 dark:text-neutral-400">
          {{ post.description }}
        </p>
        <SectionProse
          as="article"
          class="border-t border-neutral-200 dark:border-neutral-800 mt-6"
        >
          <PortableText :value="post.body" as="div" />
        </SectionProse>
      </div>
    </div>

    <SectionAppeal />
  </Container>
</template>
