const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT=5000

app.use(cors())
dotenv.config()

const userRoutes = require('./Routes/UserRoutes')
const chatRoutes = require('./Routes/ChatRoutes')
const messageRoutes = require('./Routes/MessageRoutes')
const banRoutes = require('./Routes/BanRoutes')
const feedRoutes=require('./Routes/FeedRoutes')
const jobRoutes=require('./Routes/JobRoutes')


mongoose.connect(process.env.Mongo_Key).then(() => {
    console.log('Database Connected');
})

app.use(express.json())

app.use('/', userRoutes)
app.use('/', chatRoutes)
app.use('/chat/messages', messageRoutes)
app.use('/',banRoutes)
app.use('/',feedRoutes)
app.use('/',jobRoutes)


app.listen(PORT, () => {
    console.log('Connected to Server on Port',PORT);
})