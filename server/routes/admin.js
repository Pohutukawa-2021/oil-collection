const express = require('express')

const db = require('../db/admin')
// const { checkJwt } = require('../auth0')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.fetchAllClients()
    .then((clients) => {
      res.json(clients)
      return null
    })
    .catch((err) => {
      res.status(500).json('Database error:' + err.message)
    })
})
