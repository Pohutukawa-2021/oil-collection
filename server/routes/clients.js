const express = require('express')

const db = require('../db/clients')

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
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  db.getClientDetails(req.params.id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/:id', (req, res) => {
  db.activateOrder(req.params.id)
    .then((request) => {
      res.status(200).json(request)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/:id/update', (req, res) => {
  console.log(req.body)
  const updateDetails = req.body
  db.updateClientDetails(updateDetails)
    .then((update) => {
      res.status(200).json(update)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})
