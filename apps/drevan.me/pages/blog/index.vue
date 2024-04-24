<script setup lang="ts"></script>

<template>
  <Container>
    <h1
      class="font-serif text-lg tracking-wide dark:text-neutral-200 text-neutral-600 mt-6"
    >
      André's Blog
    </h1>
    <section class="mt-2">
      <h2 class="text-xs text-semibold uppercase sr-only">Recent</h2>
      <div class="grid sm:grid-cols-3 gap-y-4 gap-x-12 -mx-4 sm:-mx-8">
        <a
          href="/blog/example-article"
          class="w-full sm:max-w-xs bg-neutral-100 dark:bg-neutral-900 px-4 sm:rounded-xl py-3 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
        >
          <article>
            <h3>Example article</h3>
          </article>
        </a>
      </div>
    </section>
  </Container>
</template>
