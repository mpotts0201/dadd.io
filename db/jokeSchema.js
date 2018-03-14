const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const JokeSchema = new Schema({
    text: String,
    votes: Number,
    comments: []
})


const Joke = mongoose.model('Joke', JokeSchema)


module.exports = {
    JokeSchema,
    Joke
}