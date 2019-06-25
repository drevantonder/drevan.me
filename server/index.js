const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  let message
  if (process.env.NODE_ENV === 'production') {
    const socket = process.env.SOCKET

    // Listen the server
    app.listen(socket)
    message = `Server listening on ${socket}`
  } else {
    const host = process.env.HOST
    const port = process.env.PORT

    // Listen the server
    app.listen(port, host)
    message = `Server listening on http://${host}:${port}`
  }
  consola.ready({
    message,
    badge: true
  })
}
start()
