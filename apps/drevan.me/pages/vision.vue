<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <main>
    <h1 class="sr-only">Vision</h1>
    <div class="snap-mandatory snap-y overflow-y-scroll h-dvh">
      <section class="h-dvh flex flex-col snap-center">
        <div class="w-full flex grow items-center justify-center">
          <h2 class="text-5xl text-center">
            <span class="text-8xl font-bold font-serif">100,000+</span><br />
            <span>uni students in Brisbane</span>
          </h2>
        </div>
        <!-- <div class="mt-auto text-center py-8 text-2xl">
          “How can they believe in Him if they have never heard about Him?”
        </div> -->
      </section>
      <section class="h-dvh flex flex-col snap-center">
        <div class="w-full flex grow items-center justify-center">
          <h2 class="text-5xl text-left">
            <span class="text-8xl font-bold font-serif">35%</span>
            international<br />
            from
            <span class="text-8xl font-bold font-serif">141</span> countries
          </h2>
        </div>
        <!-- <div class="mt-auto text-center py-8 text-2xl">
          “How can they hear about Him unless someone tells them?”
        </div> -->
      </section>
      <section class="h-dvh flex flex-col snap-center items-center">
        <div class="flex grow max-w-screen-lg h-1/2 my-32 gap-14 items-center">
          <NuxtImg
            src="/img/andre-van-tonder.jpg"
            class="block w-64 mx-1 drop-shadow object-cover rounded-xl shadow-2xl"
          />
          <div
            class="text-5xl flex flex-col gap-8 max-w-[30ch] leading-relaxed"
          >
            <h2>
              Hi!
              <Icon name="fluent-emoji:waving-hand" class="!align-baseline" />
              I'm <span class="font-semibold">André</span>!
            </h2>
            <p>
              I'm a missionary with
              <NuxtImg
                src="/img/power-to-change.png"
                alt="Power to Change"
                class="inline h-[1lh] mx-1"
              />.
            </p>
            <p>
              We are about
              <span class="font-semibold underline decoration-persian"
                >connecting people to Jesus and each other</span
              >!
            </p>
          </div>
        </div>
        <!-- <div class="mt-auto text-center py-8 text-2xl">
          “How will anyone go and tell them without being sent?”
        </div> -->
      </section>
      <section class="h-dvh flex flex-col snap-center items-center">
        <div class="flex grow max-w-screen-lg h-1/2 my-32 gap-14 items-center">
          <div
            class="text-5xl flex flex-col gap-8 max-w-[30ch] leading-relaxed"
          >
            <h2>
              <NuxtImg
                src="/img/power-to-change.png"
                alt="Power to Change"
                class="inline h-[1lh] mx-1"
              />
              has been sharing the Good News with Australian students since
              1974!
            </h2>
            <p class="text-3xl italic">(Formerly known as Student LIFE)</p>
            <p>
              Internationally, as
              <picture class="contents">
                <source
                  srcset="/img/cru-dark.png"
                  media="(prefers-color-scheme: dark)"
                />
                <source
                  srcset="/img/cru.png"
                  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
                />
                <img
                  id="screenshot"
                  src="/img/cru.png"
                  class="inline h-[1lh] align-text-bottom"
                />
              </picture>
              we share the Good News with millions each year!
            </p>
          </div>
        </div>
        <!-- <div class="mt-auto text-center py-8 text-2xl">
          “How will anyone go and tell them without being sent?”
        </div> -->
      </section>
      <section class="h-dvh flex flex-col snap-center items-center">
        <div class="flex grow max-w-screen-lg h-1/2 my-32 gap-14 items-center">
          <div
            class="text-5xl flex flex-col gap-8 max-w-[30ch] leading-relaxed items-center"
          >
            <h2>However, I can't do this alone!</h2>
            <button
              type="button"
              class="inline-flex rounded-md bg-persian px-6 py-4 font-medium text-white shadow-sm hover:bg-persian/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian text-3xl"
            >
              <Icon name="fluent-emoji:sparkles" class="mr-2 mt-1" />
              Show me how!
              <Icon name="fluent-emoji:sparkles" class="ml-2 mt-1" />
            </button>
          </div>
        </div>
        <!-- <div class="mt-auto text-center py-8 text-2xl">
          "How beautiful are the feet of messengers who bring good news!”
        </div> -->
      </section>
    </div>
  </main>
</template>
