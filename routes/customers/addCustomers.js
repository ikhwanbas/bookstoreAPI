const express = require('express')
const { send } = require('process')
const db = require('../../controller/dbController')
const app = express.Router()

app.post('/customers', (req, res) => {
    const body = req.body
    const result = db.add('customers', body)
    if (!result) {
        res.status(400).send('Wrong body')
    } else {
        res.send(result)
    }
    return
})


module.exports = app