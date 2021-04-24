<template>
  <component :is="as" class="markdown-content">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="postcss">
.markdown-content {
  @apply text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400;

  * {
    @apply mb-6 leading-relaxed;
  }

  h1,
  .fake-h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-extrabold text-gray-900;
  }

  h1,
  .fake-h1 {
    @apply text-4xl mb-5 md:text-6xl md:mb-10;

    &:not(:first-child) {
      @apply mt-8 md:mt-16;
    }
  }

  h2 {
    @apply text-2xl mb-4 md:text-4xl md:mb-8;

    &:not(:first-child) {
      @apply mt-6 md:mt-12;
    }
  }

  a {
    @apply text-blue-600;
    &:hover {
      @apply underline;
    }
  }

  ul {
    @apply ml-8;
  }

  li {
    @apply mb-3 md:mb-5;

    &::marker {
      content: '➜ ';
      @apply text-teal-400;
    }
  }

  em {
    @apply italic text-teal-600;
  }

  strong {
    @apply font-medium text-gray-200;
  }

  code:not(pre > *) {
    @apply font-mono font-normal text-lg leading-relaxed text-purple-700;
    &::before {
      content: '`';
    }
    &::after {
      content: '`';
    }
  }

  .nuxt-content-highlight {
    @apply relative;
  }
}

.markdown-content h1,
.markdown-content .fake-h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  @apply dark:text-gray-300;
}

.markdown-content code:not(pre > *) {
  @apply dark:text-purple-500;
}

.markdown-content a {
  @apply dark:text-blue-500;
}
</style>
