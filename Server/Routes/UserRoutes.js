const { forgotPassword, otpValidation } = require('../Controller/ForgotPasswordController');
const { signUp, signIn, allUsers, viewProfile, editProfile, deleteProfile } = require('../Controller/UserController')
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
// delete profile
router.delete('/deleteprofile/:id',verifyToken,verifyTokenAndAuthorization,deleteProfile)
// forgot password
router.post('/forgotpassword',forgotPassword)
// otp validation
router.post('/otpvalidation',otpValidation)

module.exports = router
