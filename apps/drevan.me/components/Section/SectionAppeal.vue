<template>
  <Section class="max-w-prose text-lg mx-auto">
    <div
      class="sm:-mx-8 border border-persian rounded-xl px-4 sm:px-8 py-3 sm:py-6 border-dashed text-base"
    >
      <h2 class="font-semibold text-3xl italic">
        Would you consider partnering with me?
      </h2>
      <p class="mt-3">
        A team of partners led by God in praying and giving is <u>crucial</u> to
        being a missionary.
      </p>
      <div class="mt-6">
        <p class="italic">To receive updates and prayer points &darr;</p>
        <PartnerForm class="mt-1" />
      </div>
      <p class="mt-7" v-if="$route.path !== '/become-a-partner'">
        Also!
        <a
          href="/become-a-partner"
          class="underline font-medium decoration-persian underline-offset-2"
        >
          See more ways you can partner with me! &rarr;
        </a>
      </p>
    </div>
  </Section>
</template>
