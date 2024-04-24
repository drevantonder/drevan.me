<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <Container class="flex flex-col grow justify-center gap-y-12">
    <div>
      <h2 class="font-bold text-3xl flex items-center gap-x-3">
        Email updates
      </h2>
      <p>
        Get prayer points and follow along with what God is doing on Queensland
        campuses.
      </p>
      <PartnerForm class="mt-4" />
    </div>

    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div
          class="w-full border-t border-neutral-300 dark:border-neutral-700"
        />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-white px-2 text-sm text-neutral-500"></span>
      </div>
    </div>

    <div>
      <h2 class="font-bold text-3xl flex items-center gap-x-3">Giving</h2>

      <a
        href="https://payments.powertochange.org.au/#/give/andre-van-tonder"
        class="mt-4 inline-flex justify-center items-center px-4 py-1.5 bg-persian text-white rounded-xl hover:bg-persian/75 text-lg font-medium tracking-wide sm:min-w-40"
      >
        Go to the giving form
        <span>
          <Icon name="ph:arrow-square-out-duotone" class="size-[1em] ml-2" />
        </span>
      </a>
    </div>
  </Container>
</template>
