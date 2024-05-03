<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <div class="flex flex-col md:flex-row grow">
    <NuxtPicture
      src="/img/schoolies.JPG"
      class="before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-[#FEF3EF] before:dark:to-neutral-950 before:z-10 before:size-full before:absolute md:before:bg-gradient-to-l relative max-h-[25vh] md:max-h-none overflow-hidden block w-full isolate md:order-last"
      fit="fill"
      :img-attrs="{ class: 'size-full object-cover' }"
    />

    <Container
      class="flex flex-col grow justify-center gap-y-12 md:gap-y-16 -mt-8 md:mt-0 md:py-8"
    >
      <div>
        <div class="font-serif text-sm dark:text-neutral-200">
          André van Tonder
        </div>
        <h1 class="text-2xl font-bold tracking-wider">Partner with me!</h1>
      </div>

      <div>
        <h2 class="font-bold text-3xl flex items-center gap-x-3">
          Email updates
        </h2>
        <p>
          Get prayer points and follow along with what God is doing on Brisbane
          university campuses.
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
        <dl class="mt-12">
          <dt class="font-semibold">
            Can I give to you directly? (I.e. cash or bank transfer)
          </dt>
          <dd class="mt-2">
            You can! However, <b>I'd prefer via the form</b>, as that
            <i>reduces</i> admin work that will <i>distract me</i> from
            ministry!
          </dd>
        </dl>
      </div>
    </Container>
  </div>
</template>
