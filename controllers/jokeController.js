const express = require('express')
const router = express.Router({ mergeParams: true })
const { Joke } = require('../db/jokeSchema')




//read
router.get('/', (req, res) => {
    Joke.find().then((jokes) => {
        res.send(jokes)
    })
})

//create 
router.post('/', (req, res) => {
    const newJoke = new Joke({
        text: req.body.text,
        votes: req.body.votes
    })
    newJoke.save()
})


//show
router.get('/:jokeId', (req, res) => {
    Joke.findById(req.params.jokeId).then((joke) => {
        res.send(joke)
    })
})

//delete
router.delete('/:jokeId', (req, res) => {
    Joke.findByIdAndRemove(req.params.jokeId).then(()=> {
        res.redirect('/api/jokes')
    })
})



module.exports = router