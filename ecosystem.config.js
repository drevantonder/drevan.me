module.exports = {
  apps: [
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
