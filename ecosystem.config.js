module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'yarn',
    args: 'run start',

    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      HOST: 'drevantonder.io',
      PORT: 80
    }
  }]
}
