const express = require('express')
const app = express()

const kingdomChronicles = require('./routes/kingdom-chronicles')

app.get('/', (req, res, next) => {
  res.send('API root')
})

app.use('/kingdom-chronicles', kingdomChronicles)

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
