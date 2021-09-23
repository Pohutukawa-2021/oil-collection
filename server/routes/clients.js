const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

// GET /api/v1/register/:id
router.get('/:id', (req, res) => {
  db.getCustomerDetails(req.params.id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})
