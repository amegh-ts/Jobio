const { signUp, signIn, allUsers } = require('../Controller/UserController')

const router = require('express').Router()

// Signup
router.post('/signup', signUp)

//signin
router.post('/signin', signIn)

// all users
router.get('/allusers',allUsers)

module.exports = router
