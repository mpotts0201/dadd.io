const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const {commentSchema} = require('./UserSchema')

const JokeSchema = new Schema({
    text: String,
    votes: Number,
    comments: [commentSchema]
})


const Joke = mongoose.model('Joke', JokeSchema)


module.exports = {
    JokeSchema,
    Joke
}