<script setup lang="ts">
useSeoMeta({
  title: "@photosbydrevan",
  description:
    "Capturing this beautiful universe one photo at a time. 📸 Check out my photos and follow me on social media. 🤩",
});
</script>

<template>
  <Container class="flex justify-center items-center min-h-screen">
    <article class="max-w-4xl">
      <h1 class="text-xl sm:text-2xl text-persian">@photosbydrevan</h1>
      <h2 class="text-5xl sm:text-6xl sm:leading-[1.1em] font-medium">
        Capturing this
        <span class="text-persian font-semibold">beautiful universe</span> one
        photo at a time
      </h2>

      <h2 class="text-sm mt-8 uppercase">Follow me on</h2>
      <div class="flex mt-1 space-x-5">
        <a
          href="https://www.facebook.com/photosbydrevan"
          target="_blank"
          rel="noopener"
        >
          <ColourfulBrandLogoFacebook class="h-10 w-auto" />
        </a>
        <a
          href="https://www.instagram.com/photosbydrevan/"
          target="_blank"
          rel="noopener"
        >
          <ColourfulBrandLogoInstagram class="h-10 w-auto" />
        </a>
        <a
          href="https://twitter.com/photosbydrevan"
          target="_blank"
          rel="noopener"
        >
          <ColourfulBrandLogoTwitter class="h-10 w-auto" />
        </a>
        <a
          href="https://www.youtube.com/@photosbydrevan"
          target="_blank"
          rel="noopener"
        >
          <ColourfulBrandLogoYoutube class="h-10 w-auto" />
        </a>
      </div>
    </article>
  </Container>
</template>
