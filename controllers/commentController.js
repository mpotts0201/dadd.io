const express = require('express')
const router = express.Router({ mergeParams: true })
const { Joke } = require('../db/jokeSchema')
const { Comment } = require('../db/commentSchema')

//read
router.get('/', (req, res) => {
    Comment.find().then((comment) => {
        res.send(comment)
    })
})




module.exports = router