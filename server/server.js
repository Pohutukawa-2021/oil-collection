const path = require('path')
const express = require('express')

const clients = require('./routes/clients')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/clients', clients)

module.exports = server
