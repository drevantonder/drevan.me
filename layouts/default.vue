<template>
  <Body
    class="bg-[#FEF3EF] text-neutral-900 dark:text-neutral-50 dark:bg-neutral-950"
  >
    <div class="min-h-screen flex flex-col">
      <header
        class="flex container mx-auto justify-center items-center gap-20 py-4"
      >
        <NuxtLink to="/blog" class="font-medium">Blog</NuxtLink>
        <NuxtLink to="/nuggets" class="font-medium">Nuggets</NuxtLink>
        <NuxtLink
          to="/"
          class="font-serif text-2xl"
          :class="{
            'decoration-persian underline underline-offset-3':
              $route.path === '/',
          }"
          >André van Tonder</NuxtLink
        >
        <NuxtLink to="/photos" class="font-medium">Photos</NuxtLink>
        <NuxtLink to="/blog" class="font-medium">X</NuxtLink>

        <ColourMode />
      </header>
      <main>
        <slot />
      </main>
      <footer class="mx-auto container mt-auto py-3">
        <div class="text-center text-sm text-neutral-700 dark:text-neutral-300">
          © 2024 André van Tonder. All rights reserved.
        </div>
      </footer>
    </div>
  </Body>
</template>
