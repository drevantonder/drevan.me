module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'yarn',
    args: 'run start --port 80 --host drevantonder.io',

    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      'HOST': 'drevantonder.io',
      'PORT': 80,
      'NODE_ENV': 'production'
    }
  }]
}
