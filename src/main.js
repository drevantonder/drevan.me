// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Page from '~/components/Page.vue'
import Intro from '~/components/Intro.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faStackOverflow)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Page', Page)
  Vue.component('Intro', Intro)

  Vue.component('FaIcon', FontAwesomeIcon)
}
