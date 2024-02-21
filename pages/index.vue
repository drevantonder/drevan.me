<template>
  <div class="container mx-auto mt-32">
    <ContentList path="/blog" v-slot="{ list }">
      <NuxtLink v-for="post in list" :key="post._path" :href="post._path">
        <h2 class="text-2xl font-semibold font-serif">{{ post.title }}</h2>
        <p class="mt-2">{{ post.description }}</p>
      </NuxtLink>
    </ContentList>
  </div>
</template>
