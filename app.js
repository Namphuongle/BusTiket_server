const express = require('express')
const cors = require('cors')

const app  = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "welcome to bus tiket "
    })
})

module.exports = app 