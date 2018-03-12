const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/userSchema')

//get
router.get('/', (req, res) => {
    User.find().then((users) => {
        res.send(users)
    })
})




module.exports = router