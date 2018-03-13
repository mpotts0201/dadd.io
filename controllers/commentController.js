const express = require('express')
const router = express.Router({ mergeParams: true })
const { Joke } = require('../db/jokeSchema')
const { Comment } = require('../db/commentSchema')

//read
router.get('/', (req, res) => {
    Joke.findById(req.params.jokeId).then((joke) => {
        const comments = joke.comments
        res.send(comments)
    })
})

//create 
router.post('/', (req, res) => {

})



module.exports = router