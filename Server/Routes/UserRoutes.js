const { signUp } = require('../Controller/UserController')

const router = require('express').Router()

// Signup
router.post('/signup',signUp)


module.exports = router
