const express = require('express')
const { send } = require('process')
const db = require('../../controller/dbController')
const app = express.Router()

app.post('/transactions', (req, res) => {
    const body = req.body
    const result = db.add('transactions', body)
    if (!result) {
        res.status(400).send('Wrong body')
    } else {
        res.send(result)
    }
    return
})


module.exports = app