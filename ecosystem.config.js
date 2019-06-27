module.exports = {
  apps: [{
    name: 'drevantonder.io-frontend--build',
    script: 'npm',
    args: 'run build',

    instances: 1,
    watch: true,
    env: {
      'NODE_ENV': 'production',
      'NUXT_HOST': '127.0.0.1',
      'NUXT_PORT': '3000',
      'API_URL': 'http://api.drevantonder.io'
    }
  },
  {
    name: 'drevantonder.io-frontend',
    script: 'npm',
    args: 'run start',
    watch: [".nuxt"],

    instances: 1,
    autorestart: true,
    watch: true
  }]
}
