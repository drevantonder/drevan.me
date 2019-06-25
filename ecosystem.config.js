module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'npm',
    args: "run start",

    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      'NODE_ENV': 'development',
      'HOST': '127.0.0.1',
      'PORT': '3000',
      'API_URL': 'http://drevantonder.io'
    },
    env_production: {
      'NODE_ENV': 'production',
      'UNIX_SOCKET_FRONTEND': '/tmp/frontend.socket',
      'API_URL': 'http://drevantonder.io'
    }
  }]
}
