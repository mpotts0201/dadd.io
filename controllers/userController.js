const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/userSchema')

//read
router.get('/', (req, res) => {
    User.find().then((users) => {
        res.send(users)
    })
})


//show
router.get('/:userId', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        res.send(user)
    })
})



//create

router.post('/', (req, res) => {
    const newUser = new User({
        userName: req.body.userName,
        aboutMe: req.body.aboutMe

    })

    newUser.save().then((savedUser) => {
        res.redirect(`/api/users/${savedUser._id}`)
    })
})

//update
router.patch('/:userId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        userName: req.body.name,
        aboutMe: req.body.aboutMe


    }, { new: true }).then((updatedUser) => {
        res.redirect(`/api/users/${updatedUser._id}`)
    })
})

//delete 
router.delete('/:userId', (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(() => {
            res.redirect('/api/users')
        })
})



module.exports = router