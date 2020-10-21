const express = require('express')
const { rest } = require('lodash')
const { send } = require('process')
const db = require('../../controller/dbController')
const app = express.Router()

app.get('/transactions', (req, res) => {
    const result = db.get('transactions', req.query)
    res.send(result)
})


module.exports = app