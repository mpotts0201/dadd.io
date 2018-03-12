const express = require('express')
const router = express.Router({ mergeParams: true })
const { Joke } = require('../db/jokeSchema')




//read
router.get('/', (req, res) => {
    Joke.find().then((jokes) => {
        res.send(jokes)
    })
})




//show
router.get('/:jokeId', (req, res) => {
    Joke.findById(req.params.jokeId).then((joke) => {
        res.send(joke)
    })
})




module.exports = router