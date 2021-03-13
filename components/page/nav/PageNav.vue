<template>
  <nav>
    <page-nav-desktop :nav="nav" />
    <page-nav-mobile :nav="nav" />
  </nav>
</template>

<script>
export default {
  data: () => ({
    nav: null,
  }),

  async fetch() {
    this.nav = await this.$content('config/nav').fetch()
  },
}
</script>
