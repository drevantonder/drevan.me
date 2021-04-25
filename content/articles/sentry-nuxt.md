---
title: Adding Sentry to Nuxt
description: How to add Sentry to Nuxt with tracing and releases
---

<markdown-content>

# Adding Sentry to Nuxt

## What is Sentry?

## Create a Sentry Project

[Create a sentry account](https://sentry.io/signup/) if you don't have one yet.

Once you're account is set up, [create a project](https://docs.sentry.io/product/sentry-basics/guides/integrate-frontend/create-new-project/) with *Vue* as the platform.

Grab the *DSN* (Data Source Name) - we'll need that in the next bit. You can find it in **Project Settings > Client Keys (DSN)**.

## Install the Sentry Module

We'll be using the [Sentry Module](https://sentry.nuxtjs.org/) for Nuxt. 

Install it using either `yarn` or `npm`:

</markdown-content>

<markdown-component>

<code-group :tabs="['Yarn', 'NPM']">

  <code-block tab="Yarn">

  ```bash
  yarn add @nuxtjs/sentry
  ```
  </code-block>

  <code-block tab="NPM">

  ```bash
  npm install @nuxtjs/sentry
  ```

  </code-block>

</code-group>

</markdown-component>

<markdown-content>

Then add `nuxtjs/sentry` to the modules section of your `nuxt.config.js` and add a `sentry` section.

```js [nuxt.config.js]
{
  modules: [
    '@nuxtjs/sentry'
  ],

  // Other stuff

  sentry: {}
}
```

## Configure the Sentry Module

Then add the *DSN* from the Sentry Project we created earlier.

You can do that in `nuxt.config.js` or as using the `SENTRY_DSN` environment variable:

</markdown-content>

<markdown-component>

<code-group :tabs="['nuxt.config.js', '.env']">

  <code-block tab="nuxt.config.js">

  ```js [nuxt.config.js]
  {
    sentry: {
      dsn: '<project_dns>'
    }
  }
  ```
  </code-block>

  <code-block tab=".env">

  ```env [.env]
  SENTRY_DSN=<project_dsn>
  ```

  </code-block>

</code-group>

</markdown-component>

<markdown-content>

I'm using a `.env` file here for example, but if using Netlify like me, set `SENTRY_DSN` in **Site Settings > Build & Deploy > Environment > Environment Variables**. Visit Netlify Docs for more information on [Declaring Variables in Netlify](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables)

## Test that it is working

If you're like me and your code is so perfect that it never throws errors 😉, we'll need to add in error in our code somewhere.

I tested by throwing an error in `layouts/default.vue`:

```vue [layouts/default.vue]
<script>
export default {
  mounted() {
    throw new Error('Hello Sentry 👋!')
  },
}
</script>
```

**And that's it!** Now we're sending our errors to Sentry. However, there's more we can do. Next up we'll add tracing.

## Tracing

### What is Sentry Tracing?

### Let's Add Tracing

## Release

### What Are Sentry Releases?

### Let's Add Releases

</markdown-content>