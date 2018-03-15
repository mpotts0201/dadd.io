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
    Joke.findById(req.params.jokeId).then((joke) => {
        const newComment = new Comment({
            text: req.body.text
        })
        joke.comments.push(newComment)
        return joke.save()
    }).then((savedJoke) => {
        res.send(savedJoke)
    }).catch((err) => {
        console.log(err)
    })
})

//delete

router.delete('/:id', (req, res) => {
    Joke.findById(req.params.jokeId).then((joke) => {
        console.log(joke.comments.id)
        joke.comments.id(req.params.id).remove()

        return joke.save()
    }).then((savedJoke) => {
        res.send(savedJoke)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router