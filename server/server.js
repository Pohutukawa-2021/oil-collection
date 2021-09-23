const path = require('path')
const express = require('express')

const register = require ('./routes/register')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/register', register)

module.exports = server
