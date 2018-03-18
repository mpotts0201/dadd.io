const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const User = require('./userSchema')

const commentSchema = new Schema({
    text: String,
    author: { type: Schema.Types.ObjectId, ref: 'User'}
})


const Comment = mongoose.model('Comment', commentSchema)


module.exports = {
    commentSchema,
    Comment
}