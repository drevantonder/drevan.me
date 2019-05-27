module.exports = {
  apps: [{
    name: 'drevantonder.io',
    script: 'server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: 'drevantonder.io',
      ref: 'origin/master',
      repo: 'git@github.com:DrevanTonder/drevantonder.io.git',
      path: '/root/drevantonder.io',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
