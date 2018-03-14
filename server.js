require('dotenv').config()
// packages
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userController = require('./controllers/userController')
const jokeController = require('./controllers/jokeController')
const commentController = require('./controllers/commentController')


//connect to mongoose 
mongoose.connect(process.env.MONGODB_URI)

//logging info for db
const connection = mongoose.connection


connection.on('connected', () => {
    console.log("Mongoose connected successfully")
})

connection.on('error', (err) => {
    console.log("Mongoose error: ", err)
})



//middleware
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))


//routes
app.use('/api/users', userController)
app.use('/api/jokes', jokeController)
app.use('/api/jokes/:jokeId', commentController)


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Slanga-langin' hot jokes on PORT ", PORT)
})


