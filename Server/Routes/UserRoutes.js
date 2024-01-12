const { signUp, signIn, allUsers, viewProfile, editProfile } = require('../Controller/UserController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken');


const router = require('express').Router()

// Signup
router.post('/signup', signUp)

//signin
router.post('/signin', signIn)

// all users
router.get('/allusers',verifyToken,allUsers)
// view profile
router.get('/Viewprofile/:id',verifyToken,verifyTokenAndAuthorization,viewProfile)
// edit profile
router.put('/editprofile/:id',verifyToken,verifyTokenAndAuthorization,editProfile)

module.exports = router
