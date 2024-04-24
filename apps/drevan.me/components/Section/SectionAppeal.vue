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
      <div class="mt-4">
        <PartnerForm />
      </div>
      <p class="mt-3">
        <a
          v-if="$route.path !== '/become-a-partner'"
          href="/become-a-partner"
          class="underline font-medium decoration-persian underline-offset-2"
        >
          Learn more? &rarr;</a
        >
      </p>
    </div>
  </Section>
</template>
