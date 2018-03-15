const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const {commentSchema} = require('./commentSchema')

const UserSchema = new Schema({
    userName: String,
    aboutMe: String, 
    comments: [commentSchema]
})


const User = mongoose.model('User', UserSchema)


module.exports = {
    UserSchema,
    User
}