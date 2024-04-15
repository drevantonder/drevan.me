<template>
  <Body
    class="bg-[#FEF3EF] text-neutral-900 dark:text-neutral-50 dark:bg-neutral-950"
  >
    <div class="min-h-screen flex flex-col">
      <Container
        class="grid grid-cols-[repeat(3,auto),1fr] sm:flex justify-start sm:justify-center items-end sm:items-center gap-y-2 gap-x-6 sm:gap-x-10 lg:gap-x-20 py-4"
      >
        <div class="size-8 hidden sm:block mr-auto"></div>

        <NuxtLink
          to="/blog"
          class="font-medium hover:underline leading-none"
          :class="{
            ' underline ': $route.path.startsWith('/blog'),
          }"
          >Blog</NuxtLink
        >

        <NuxtLink
          to="/nuggets"
          class="font-medium hover:underline leading-none"
          :class="{
            ' underline ': $route.path.startsWith('/nuggets'),
          }"
          >Nuggets</NuxtLink
        >
        <NuxtLink
          to="/"
          class="col-span-full order-first sm:order-none font-serif text-2xl tracking-wide decoration-persian hover:underline underline-offset-2 text-left sm:text-center"
          :class="{
            ' underline ': $route.path === '/',
          }"
          >André van Tonder</NuxtLink
        >
        <NuxtLink
          to="/photos"
          class="font-medium hover:underline leading-none"
          :class="{
            ' underline ': $route.path.startsWith('/photos'),
          }"
          >Photos</NuxtLink
        >

        <NuxtLink
          to="/partner"
          class="font-medium hover:underline leading-none"
          :class="{
            ' underline ': $route.path.startsWith('/partner'),
          }"
          >Partner with me</NuxtLink
        >

        <ColourMode class="sm:ml-auto -m-2" />
      </Container>
      <main>
        <slot />
      </main>
      <footer class="mx-auto container mt-auto pt-6 py-3">
        <div class="text-center text-sm text-neutral-700 dark:text-neutral-300">
          © 2024 André van Tonder. All rights reserved.
        </div>
      </footer>
    </div>
  </Body>
</template>
