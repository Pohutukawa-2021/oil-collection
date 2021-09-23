const path = require('path')
const express = require('express')

const register = require('./routes/register')
const clients = require('./routes/clients')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/register', register)
server.use('/api/v1/clients', clients)

module.exports = server
