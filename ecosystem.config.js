module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'server/index.js',

    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
