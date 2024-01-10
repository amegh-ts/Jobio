const { signUp } = require('../Controller/UserController')

const router = require('express').Router()

// Signup
router.post('/signup',signUp)

//signin
router.post('/signin' sig)


module.exports = router
