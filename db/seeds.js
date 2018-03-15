require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { User } = require('./userSchema')
const { Joke } = require('./jokeSchema')
const { Comment } = require('./commentSchema')

//test comments

const comment1 = new Comment({
    text: "First test comment!"
})

const comment2 = new Comment({
    text: "Second test comment!"
})

const comment3 = new Comment({
    text: "Third test comment!"
})

const comment4 = new Comment({
    text: "Fourth test comment!"
})

const comment5 = new Comment({
    text: "Fifth test comment!"
})




//test jokes

const joke1 = new Joke({
    text: "Whenever we drive past a graveyard my dad says, 'Do you know why I can’t be buried there?' And we all say, 'Why not?' And he says, 'Because I’m not dead yet.'",
    votes: 0,
    comments: [ comment1, comment2, comment3, comment4, comment5 ]
})

const joke2 = new Joke({
    text: "Two peanuts were walking down the street. One was a salted.",
    votes: 0,
    comments: [ comment1, comment2, comment3, comment4, comment5 ]
})

const joke3 = new Joke({
    text: "I used to have a job at a calendar factory but I got the sack because I took a couple of days off.",
    votes: 0,
    comments: [ comment1, comment2, comment3, comment4, comment5 ]
})

const joke4 = new Joke({
    text: "How do you make holy water? You boil the hell out of it.",
    votes: 0,
    comments: [ ]
})

const joke5 = new Joke({
    text: "Two guys walk into a bar, the third one ducks.",
    votes: 0,
    comments: [ ]
})

//test users

const murphy = new User({
    userName: "mpotts0201",
    aboutMe: "My name is Murphy and I built this app!",
    comments: [ comment1, comment2, comment3, comment4, comment5 ]
})


const john = new User({
    userName: "johndoe1234",
    aboutMe: "My name is John and I do not really exist.",
    comments: []
})

const jane = new User({
    userName: "janedoe1234",
    aboutMe: "My name is Jane and John is a liar.",
    comments: []
})



Joke.remove({})
    .then(() => { joke1.save() })
    .then(() => { joke2.save() })
    .then(() => { joke3.save() })
    .then(() => { joke4.save() })
    .then(() => { joke5.save() })
    .then(() => { console.log("Saved jokes successfully") })



User.remove({})
    .then(() => { murphy.save() })
    .then(() => { john.save() })
    .then(() => { jane.save() })
    // this keeps my server from sending the data properly to the browser 
    // .then(() => { mongoose.connection.close() })
    .then(() => { console.log("Saved users successfully") })
