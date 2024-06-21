<script setup lang="ts">
const query = groq`*[_type == "post"]`;
const { data: posts } = await useSanityQuery(query);
</script>

<template>
  <Container>
    <h1
      class="font-serif text-lg tracking-wide dark:text-neutral-200 text-neutral-600 mt-6"
    >
      André's Blog
    </h1>
    <section class="mt-2">
      <NuxtLink
        v-for="post in posts"
        :key="post._id"
        :href="`/blog/${post.slug.current}`"
      >
        <h3 class="text-2xl font-semibold font-serif">{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </section>
  </Container>
</template>
