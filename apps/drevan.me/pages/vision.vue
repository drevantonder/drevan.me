<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

const totalPeople = ref(100000);
const iconValue = 50; // Each circle represents 50 people
const totalCircles = totalPeople.value / iconValue;
const canvas = ref<HTMLCanvasElement | null>(null);
const currentCount = ref(0);

const drawCircles = (ctx: CanvasRenderingContext2D, count: number) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const padding = 1; // Fixed padding between circles
  const cols = Math.floor(Math.sqrt(totalCircles)); // Max columns that can fit within the canvas
  const circleSize = (width - (cols + 1) * padding) / cols; // Adjust circle size to fit with padding

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < count; i++) {
    const x = (i % cols) * (circleSize + padding) + padding / 2;
    const y = Math.floor(i / cols) * (circleSize + padding) + padding / 2;
    ctx.beginPath();
    ctx.arc(
      x + circleSize / 2,
      y + circleSize / 2,
      circleSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(69, 41, 255, 1)`; // Solid color for the circle
    ctx.fill();
    ctx.closePath();
  }
};

const animateCircles = (ctx: CanvasRenderingContext2D) => {
  const interval = setInterval(() => {
    if (currentCount.value < totalCircles) {
      currentCount.value += 1; // Add one circle at a time
    } else {
      currentCount.value = 0; // Reset and start again
    }
    drawCircles(ctx, currentCount.value);
  }, 2); // Adjust this interval for smooth animation
};

onMounted(() => {
  const canvasElement = canvas.value!;
  const ctx = canvasElement.getContext("2d")!;
  canvasElement.width = canvasElement.offsetWidth;
  canvasElement.height = canvasElement.offsetHeight;
  animateCircles(ctx);
});
</script>

<template>
  <main>
    <h1 class="sr-only">Vision</h1>
    <div class="snap-mandatory snap-y overflow-y-scroll h-dvh">
      <section class="h-dvh snap-center">
        <div
          class="h-full container mx-auto py-12 flex flex-col items-center justify-center gap-32"
        >
          <div class="flex justify-around w-full items-center">
            <div>
              <div class="flex items-center text-sm">
                <div class="size-2 bg-persian rounded-full mr-1"></div>
                = {{ iconValue }} people
              </div>
              <div class="size-64 relative mt-1">
                <canvas ref="canvas" class="w-full h-full"></canvas>
              </div>
            </div>
            <div class="text-5xl text-center">
              <div class="font-serif font-bold text-8xl">100,000+</div>
              <div>uni students in Brisbane</div>
            </div>
          </div>

          <div class="flex justify-around">
            <div class="text-5xl text-left">
              <span class="text-8xl font-bold font-serif">35%</span>
              international<br />
              from
              <span class="text-8xl font-bold font-serif">140+</span> countries
            </div>
            <div>
              <Icon name="flag:ad-4x3" class="text-8xl" />
            </div>
          </div>
        </div>
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
