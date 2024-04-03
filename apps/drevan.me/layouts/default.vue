<template>
  <Body
    class="bg-[#FEF3EF] text-neutral-900 dark:text-neutral-50 dark:bg-neutral-950"
  >
    <div class="min-h-screen flex flex-col">
      <header
        class="flex container mx-auto justify-between items-center gap-20 py-4"
      >
        <div class="size-5"></div>

        <div class="flex justify-center items-center gap-20 py-4">
          <NuxtLink to="/nuggets" class="font-medium hover:underline"
            >Nuggets</NuxtLink
          >
          <NuxtLink
            to="/"
            class="font-serif text-2xl tracking-wide decoration-persian hover:underline underline-offset-2 text-center"
            :class="{
              ' underline ': $route.path === '/',
            }"
            >André van Tonder</NuxtLink
          >
          <NuxtLink to="/photos" class="font-medium hover:underline"
            >Photos</NuxtLink
          >
        </div>

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
