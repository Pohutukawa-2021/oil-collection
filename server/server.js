const path = require('path')
const express = require('express')

const users = require('./routes/users')
const admin = require('./routes/admin')
const publicRoutes = require('./routes/public')
const protectedRoutes = require('./routes/protected')
const privateRoutes = require('./routes/private')
const handleErrors = require('./handleErrors')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)
server.use('/api/v1/admin', admin)
server.use('/api/v1/public', publicRoutes)
server.use('/api/v1/protected', protectedRoutes)
server.use('/api/v1/private', privateRoutes)

server.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})

server.use(handleErrors)

module.exports = server
