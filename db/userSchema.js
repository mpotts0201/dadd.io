const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const UserSchema = new Schema({
    userName: String,
    aboutMe: String, 
    comments: []
})


const User = mongoose.model('User', UserSchema)


module.exports = {
    UserSchema,
    User
}