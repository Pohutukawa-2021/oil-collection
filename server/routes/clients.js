const express = require('express')

const db = require('../db/clients')
const { getUserRoles } = require('../auth0')

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

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const roles = await getUserRoles(id)
    res.json({ roles })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'unable to retrieve user roles' })
  }
})

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
