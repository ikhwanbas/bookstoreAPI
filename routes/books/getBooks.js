const express = require('express')
const { rest } = require('lodash')
const { send } = require('process')
const db = require('../../controller/dbController')
const app = express.Router()

app.get('/books', (req, res) => {
    const result = db.get('books', req.query)
    res.send(result)
})


module.exports = app