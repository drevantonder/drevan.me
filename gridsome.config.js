// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'kAch7zfEdHyYdCq0Y4qBHgtt'
        },
        version: 'published'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      purgeConfig: {
        defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [] // I'm using TailwindUI
      }
    }
  ]
}
