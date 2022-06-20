const express = require('express')
const port = process.env.PORT || 5000

const { urlencoded, json } = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken');
app.set('port', port)
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())
app.use('/api', require('./routes/books.routes'))
app.use(express.static(path.join(__dirname, '../static')))
module.exports = app