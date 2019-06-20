module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'yarn',
    args: 'run start',

    instances: 1,
    autorestart: true,
    watch: true
  }]
}
