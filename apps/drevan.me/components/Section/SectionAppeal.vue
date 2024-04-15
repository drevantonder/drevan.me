<template>
  <Section class="max-w-prose text-lg mx-auto">
    <div
      class="-mx-4 sm:-mx-8 border border-persian rounded-xl px-4 sm:px-8 py-3 sm:py-6 border-dashed"
    >
      <h2 class="font-semibold text-3xl italic">
        Would you consider partnering with me?
      </h2>
      <p class="mt-3 text-base">
        <b class="tracking-wide">Partners make this possible!</b>
        Sign up for prayer updates in your inbox below.
      </p>
      <form
        action="/api/partner-form"
        method="post"
        id="partner-section-form"
        class="max-w-sm"
      >
        <div class="mt-2">
          <label
            for="partner-section-form_email"
            class="text-sm font-medium tracking-wide text-neutral-200"
            >Email</label
          >
          <input
            type="email"
            id="partner-section-form_email"
            class="block text-lg dark:bg-neutral-800 rounded-md w-full text-neutral-900 dark:text-white px-3 py-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-persian"
          />
        </div>

        <div class="mt-2 flex items-center gap-1.5">
          <input
            type="checkbox"
            id="partner-section-form_financial"
            class="size-[1em] accent-current text-persian"
          />
          <label for="partner-section-form_financial" class="text-base"
            >I'd interested in partnering financially!</label
          >
        </div>
      </form>
      <div class="flex gap-x-4 mt-4">
        <button
          type="submit"
          form="partner-section-form"
          class="inline-flex justify-center items-center px-4 py-2 bg-persian text-white rounded-xl hover:bg-persian/75 text-lg font-medium tracking-wide sm:min-w-48"
        >
          Get involved!
        </button>
        <a
          v-if="$route.path !== '/partner'"
          href="/partner"
          class="inline-flex items-center px-4 py-2 bg-neutral-700 text-white rounded-xl hover:bg-neutral-700/75 text-lg"
        >
          Learn more &rarr;</a
        >
      </div>
    </div>
  </Section>
</template>
