const express = require('express')
const router = express.Router()

const buttons = []

router.get('/', (req, res) => {
  res.send(buttons)
})

router.get('/:letter', (req, res) => {
  const letter = req.params.letter.toLowerCase()
  const index = buttons.indexOf(letter)
  if (index > -1) {
    buttons.splice(index, 1)
  } else {
    buttons.push(letter)
  }
  res.send(buttons)
})

module.exports = router
