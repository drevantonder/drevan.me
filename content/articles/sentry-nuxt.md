---
title: Adding Sentry to Nuxt
description: How to add Sentry to Nuxt with tracing and releases
---

<markdown-content>

# Adding Sentry to Nuxt

## What is Sentry?

## Installation

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

Then add `nuxtjs/sentry` to the modules section of your `nuxt.config.js`.

```js [nuxt.config.js]
{
  modules: [
    '@nuxtjs/sentry'
  ],
  sentry: {}
}
```

## Configuration

The first thing to configure is the DNS (Data Source Name). This tells Sentry where to send the errors (and tracing) to.

You can do that by either setting the value in nuxt.config.js:

```js [nuxt.config.js]
{
  sentry: {
    dsn: '<project_dns>'
  }
}
```

Or setting the env variable `SENTRY_DSN`:

```env [.env]
SENTRY_DSN=<project_dsn>
```

I'm using a `.env` file here for example, but if using Netlify like me, set `SENTRY_DSN` in **Site Settings > Build & Deploy > Environment > Environment Variables**. Visit Netlify Docs for more information on [Declaring Variables in Netlify](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables)

## Tracing

### What is Sentry Tracing?

### Let's Add Tracing

## Release

### What Are Sentry Releases?

### Let's Add Releases

</markdown-content>