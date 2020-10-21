const express = require('express')
const { rest } = require('lodash')
const { send } = require('process')
const db = require('../../controller/dbController')
const app = express.Router()

app.get('/publishers', (req, res) => {
    const result = db.get('publishers', req.query)
    res.send(result)
})


module.exports = app