require('dontenv').config()
// packages
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userController = require('./controllers/userController')


//connect to mongoose 
mongoose.connect(process.env.MONGODB_URI)

//logging info for db
const connection = mongoose.connect


connection.on('connected', () =>{
    console.log("Mongoose connected successfully")
})

connection.on('error', (err)=>{
    console.log("Mongoose error: ", err)
})

//middleware
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))


//routes
app.use('/users', userController)

app.get('/', (req, res) => {
    res.send("Hello World")
})





const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Application is listening on PORT ", PORT )
})