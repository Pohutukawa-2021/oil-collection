const path = require('path')
const express = require('express')

const clients = require('./routes/clients')
const publicRoutes = require('./routes/public')
const protectedRoutes = require('./routes/protected')
const privateRoutes = require('./routes/private')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/clients', clients)
server.use('/api/v1/public', publicRoutes)
server.use('/api/v1/protected', protectedRoutes)
server.use('/api/v1/private', privateRoutes)

module.exports = server
