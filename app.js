const express = require('express')
const cors = require('cors')

const tiketRoute = require('./app/route/tiket.route')
const ApiError  = require('./app/api-error')
const app  = express()

app.use(cors())
app.use(express.json())



//route
app.use("/api",tiketRoute)

//handler 404 
app.use((req, res, next) => {

    return next(new ApiError(404, "Resourse not found"));
});

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "welcome to bus tiket "
    })
})

module.exports = app 