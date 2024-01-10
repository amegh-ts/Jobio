const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(function (req,res,next) {
    console.log('All time first check');
    next()
})

app.use(cors())
dotenv.config()


mongoose.connect(process.env.Mongo_Key).then(() => {
    console.log('Database Connected');
})


app.use(express.json())


app.listen(5000, () => {
    console.log('Connected to Server');
})