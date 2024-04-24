<script setup lang="ts">
const status = ref<"idle" | "pending" | "success" | "error">("idle");
const message = ref<string | null>(null);

const form = ref<HTMLFormElement | null>(null);
const onSubmit = async (event: Event) => {
  if (!form.value) return;

  status.value = "pending";

  const formData = new FormData(form.value);
  const response = await fetch("/api/partner", {
    method: "POST",
    body: formData,
  });

  message.value = await response.text();
  status.value = response.ok ? "success" : "error";

  if (response.ok) form.value.reset();
};
</script>

<template>
  <form
    ref="form"
    action="/api/partner"
    method="post"
    id="partner-section-form"
    class="inline-flex flex-col gap-4"
    @submit.prevent="onSubmit"
  >
    <div class="flex gap-x-3 items-end">
      <div class="w-24">
        <label
          for="partner-form_firstName"
          class="text-sm font-medium tracking-wide text-neutral-800 dark:text-neutral-200"
        >
          First name
        </label>
        <input
          required
          type="text"
          name="firstName"
          autocomplete="given-name"
          id="partner-form_firstName"
          class="block border-0 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 text-lg dark:bg-neutral-800 rounded-md w-full text-neutral-900 dark:text-white px-3 py-1.5 focus-within:outline-none focus-within:ring-2 focus-within:ring-persian dark:focus-within:ring-persian"
        />
      </div>

      <div>
        <label
          for="partner-form_lastName"
          class="text-sm font-medium tracking-wide text-neutral-800 dark:text-neutral-200"
        >
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          autocomplete="email"
          id="partner-form_email"
          class="block border-0 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 text-lg dark:bg-neutral-800 rounded-md w-full text-neutral-900 dark:text-white px-3 py-1.5 focus-within:outline-none focus-within:ring-2 focus-within:ring-persian dark:focus-within:ring-persian"
        />
      </div>

      <button
        type="submit"
        class="inline-flex justify-center items-center px-4 py-1.5 bg-persian text-white rounded-xl hover:bg-persian/75 text-lg font-medium tracking-wide sm:min-w-40"
      >
        <span>
          <Icon
            v-if="status !== 'pending'"
            name="ph:paper-plane-tilt-duotone"
            class="size-[1em]"
          />
          <Icon
            v-else
            name="ph:spinner-duotone"
            class="size-[1em] animate-spin"
          />
        </span>
      </button>
    </div>

    <div
      v-if="message"
      class="rounded-lg p-3 border"
      :class="
        status === 'success'
          ? 'bg-green-100 border-green-200 dark:bg-green-950 dark:border-green-900'
          : 'bg-red-100 border-red-200 dark:bg-red-950 dark:border-red-900'
      "
    >
      <p
        class="font-medium"
        :class="
          status === 'success'
            ? 'text-green-900 dark:text-white'
            : 'text-red-900 dark:text-white'
        "
      >
        {{ message }}
      </p>
    </div>
  </form>
</template>
