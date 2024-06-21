<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { Book, Music, Nugget, Person } from "@drevan/sanity/sanity.types";

defineOptions({
  groqProjection: groq`{
    _id,
    displayedId,
    type,
    text,
    slug,
    author->{name, slug},
    book->{title, slug},
    music->{title, slug},
  }`,
});

withDefaults(
  defineProps<{
    nugget:
      | (Omit<Nugget, "book" | "author" | "music"> & {
          book?: Book;
          author?: Person;
          music?: Music;
        })
      | null;
    status: AsyncDataRequestStatus;
  }>(),
  {
    status: "success",
  }
);
</script>

<template>
  <div v-if="status === 'pending'">
    <div
      class="w-full sm:max-w-xs bg-neutral-100 dark:bg-neutral-900 px-4 rounded-xl py-3 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
    >
      <SkeletonText :lines="2" />
      <div class="mt-2 text-sm">
        —<SkeletonText class="w-24" />,<SkeletonText class="w-16" />
      </div>
    </div>
  </div>
  <div
    v-else-if="status === 'success' && nugget"
    class="w-full sm:max-w-xs bg-neutral-100 dark:bg-neutral-900 px-4 rounded-xl py-3 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 relative"
  >
    <div
      class="text-xs text-neutral-600 font-medium absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-12"
    >
      #{{ nugget.displayedId }}
    </div>
    <blockquote v-if="nugget.type === 'quote' || nugget.type === 'lyric'">
      <NuxtLink
        class="prose prose-lg dark:prose-invert prose-neutral"
        :to="`/nuggets/${nugget.slug.current}`"
      >
        <div
          v-html="nugget.text"
          class="prose prose-lg dark:prose-invert prose-neutral whitespace-pre-wrap"
        />
      </NuxtLink>
      <footer class="mt-2 dark:text-neutral-100 font-medium text-sm">
        —<NuxtLink
          v-if="nugget.author"
          :to="`/people/${nugget.author.slug.current}`"
          class="decoration-persian underline"
          >{{ nugget.author.name }}</NuxtLink
        >
        <template v-if="nugget.book">
          ,
          <NuxtLink
            :to="`/books/${nugget.book.slug.current}`"
            class="decoration-persian underline"
          >
            <Icon name="ph:book-duotone" />
            {{ nugget.book.title }}
          </NuxtLink>
        </template>
        <template v-if="nugget.music">
          ,
          <NuxtLink
            :to="`/music/${nugget.music.slug.current}`"
            class="decoration-persian underline"
          >
            <Icon name="ph:music-note-duotone" />
            {{ nugget.music.title }}
          </NuxtLink>
        </template>
      </footer>
    </blockquote>
    <div v-else>
      <NuxtLink
        class="prose prose-lg dark:prose-invert prose-neutral"
        :to="`/nuggets/${nugget.slug.current}`"
      >
        <div
          v-html="nugget.text"
          class="prose prose-lg dark:prose-invert prose-neutral"
        />
      </NuxtLink>
    </div>
  </div>
</template>
