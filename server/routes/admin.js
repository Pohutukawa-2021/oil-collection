const express = require('express')

const { checkJwt } = require('../auth0')
const jwtAuthz = require('express-jwt-authz')

const checkAdmin = jwtAuthz(['read:my_private_route'], { customScopeKey: 'permissions' })

const db = require('../db/admin')
// const { checkJwt } = require('../auth0')

const router = express.Router()

module.exports = router

router.get('/', checkJwt, checkAdmin, (req, res) => {
  db.fetchAllClients()
    .then((clients) => {
      res.json(clients)
      return null
    })
    .catch((err) => {
      res.status(500).json('Database error:' + err.message)
    })
})
