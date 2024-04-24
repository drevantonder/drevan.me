<script setup lang="ts">
definePageMeta({
  layout: "blank",
});
</script>

<template>
  <Container class="flex flex-col justify-center gap-y-8">
    <div>
      <h2 class="font-bold text-3xl">Email updates</h2>
      <p>
        Get prayer points and follow along with what God is doing on Queensland
        campuses.
      </p>
      <PartnerForm />
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
      <h2 class="font-bold text-3xl">Give!</h2>
      <a href="https://payments.powertochange.org.au/#/give/andre-van-tonder">
        S
      </a>
    </div>
  </Container>
</template>
