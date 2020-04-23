<template>
  <Layout>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </Layout>
</template>

<script>
const token = 'E2yYk4GnJN1Bs3sEa7Rr1gtt';

const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${token}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}
export default {
  data() {
    return {
      story: {content: {}}
    }
  },
  mounted() {
    loadStoryblokBridge(() => { 
      this.initStoryblokEvents()
    })
  },
  methods: {
    loadStory() {
      window.storyblok.get({
        slug: window.storyblok.getParam('path'),
        version: 'draft'
      }, (data) => {
        this.story = data.story
      })
    },
    initStoryblokEvents() {
      this.loadStory()
      window.storyblok.on(['change', 'published'], () => {
        this.loadStory()
      })
      window.storyblok.on('input', (payload) => {
        if (this.story && payload.story.id === this.story.id) {
          payload.story.content = window.storyblok.addComments(payload.story.content, payload.story.id)
          this.story = payload.story
        }
      })
      window.storyblok.pingEditor(() => {
        if (window.storyblok.inEditor) {
          window.storyblok.enterEditmode()
        }
      })
    }
  }
}
</script>