const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const commentSchema = new Schema({
    text: String
})


const Comment = mongoose.model('Comment', commentSchema)


module.exports = {
    commentSchema,
    Comment
}