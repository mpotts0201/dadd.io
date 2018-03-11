const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./userSchema')
const Joke = require('./jokeSchema')
const Comment = require('./commentSchema')


