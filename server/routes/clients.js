const express = require('express')

const db = require('../db/clients')
const { checkJwt } = require('../auth0')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const newUser = req.body
  db.addUser(newUser)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

// GET /api/v1/clients/:id
router.get('/:id', checkJwt, (req, res) => {
  db.getCustomerDetails(req.params.id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/:id/request', (req, res) => {
  db.activateOrder(req.params.id)
    .then((request) => {
      res.status(200).json(request)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})
