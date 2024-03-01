<script setup lang="ts">
withDefaults(
  defineProps<{
    pending: boolean;
    nugget: Nugget | null;
  }>(),
  {
    pending: false,
  }
);
</script>

<template>
  <div v-if="pending">
    <div
      class="max-w-xs bg-neutral-100 dark:bg-neutral-900 px-4 -mx-4 rounded-xl py-3 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
    >
      <SkeletonText :lines="2" />
      <div class="mt-2 text-sm">
        —<SkeletonText class="w-24" />,<SkeletonText class="w-16" />
      </div>
    </div>
  </div>
  <div
    v-else-if="nugget"
    class="max-w-xs bg-neutral-100 dark:bg-neutral-900 px-4 -mx-4 rounded-xl py-3 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 relative"
  >
    <div
      class="text-xs text-neutral-600 font-medium absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-12"
    >
      #{{ nugget.displayedId }}
    </div>
    <blockquote v-if="nugget.type === 'quote' || nugget.type === 'lyric'">
      <NuxtLink
        class="prose prose-lg dark:prose-invert prose-neutral"
        :to="`/nuggets/${nugget.slug}--${nugget.id}`"
      >
        <div
          v-html="nugget.text.html"
          class="prose prose-lg dark:prose-invert prose-neutral"
        />
      </NuxtLink>
      <footer class="mt-2 dark:text-neutral-100 font-medium text-sm">
        —<MyLink
          v-if="nugget.originator"
          :to="`/people/${nugget.originator.slug}`"
          >{{ nugget.originator.name }}</MyLink
        ><template v-if="nugget.content">
          ,
          <ContentLink :content="nugget.content" />
        </template>
      </footer>
    </blockquote>
    <div v-else>
      <NuxtLink
        class="prose prose-lg dark:prose-invert prose-neutral"
        :to="`/nuggets/${nugget.slug}--${nugget.id}`"
      >
        <div
          v-html="nugget.text.html"
          class="prose prose-lg dark:prose-invert prose-neutral"
        />
      </NuxtLink>
    </div>
  </div>
</template>
