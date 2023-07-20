require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const copper01Routes = require('./routes/copper01')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/copper01', copper01Routes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connect to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })