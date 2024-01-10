const { signUp, signIn } = require('../Controller/UserController')

const router = require('express').Router()

// Signup
router.post('/signup', signUp)

//signin
router.post('/signin', signIn)


module.exports = router
