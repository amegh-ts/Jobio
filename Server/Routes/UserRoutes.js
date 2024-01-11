const { signUp, signIn, allUsers, viewProfile } = require('../Controller/UserController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken');


const router = require('express').Router()

// Signup
router.post('/signup', signUp)

//signin
router.post('/signin', signIn)

// all users
router.get('/allusers',verifyToken,allUsers)
// view profile
router.get('/Viewprofile/:id',viewProfile,verifyTokenAndAuthorization)

module.exports = router
