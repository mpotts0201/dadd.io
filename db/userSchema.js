const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise



const commentSchema = new Schema({
    text: String,
}, { toJSON: {virtuals: true}})


const UserSchema = new Schema({
    userName: String,
    aboutMe: String, 
    comment: String,
})

const commentSchema = new Schema({
    text: String,
}, { toJSON: {virtuals: true}})


commentSchema.virtual('author', {
    ref: 'User',
    localField: 'userName',
    foreignField: 'comments',
    justOne: true
})

const User = mongoose.model('User', UserSchema)

const Comment = mongoose.model('Comment', commentSchema)


module.exports = {
    UserSchema,
    User,
    commentSchema,
    Comment
}