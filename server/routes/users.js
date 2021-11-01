const express = require('express')

const db = require('../db/users')
const { checkJwt } = require('../auth0')

const router = express.Router()

module.exports = router

// GET /api/v1/clients/:id

router.post('/', (req, res) => {
  const newUser = req.body
  db.addUser(newUser)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(() => {
      res.status(404)
    })
})

router.get('/:id', checkJwt, (req, res, next) => {
  db.getUserDetails(req.params.id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(() => {
      res.status(404)
    })
})

router.patch('/:id', (req, res) => {
  db.activateOrder(req.params.id)
    .then((request) => {
      res.status(200).json(request)
      return null
    })
    .catch(() => {
      res.status(404)
    })
})

router.patch('/:id/update', (req, res) => {
  const updateDetails = req.body
  db.updateUserDetails(updateDetails)
    .then((update) => {
      res.status(200).json(update)
      return null
    })
    .catch(() => {
      res.status(404)
    })
})
