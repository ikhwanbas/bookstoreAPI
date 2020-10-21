const express = require('express')
const { send } = require('process')
const db = require('../../controller/dbController')
const app = express.Router()

app.post('/publishers', (req, res) => {
    const body = req.body
    const result = db.add('publishers', body)
    if (!result) {
        res.status(400).send('Wrong body')
    } else {
        res.send(result)
    }
    return
})


module.exports = app