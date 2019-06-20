module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'yarn',
    args: 'run start',

    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      'HOST': 'drevantonder.io',
      'PORT': 80,
      'NODE_ENV': 'production'
      'API_HOST': 'drevantonder.io',
      'API_PORT': '80'
    }
  }]
}
