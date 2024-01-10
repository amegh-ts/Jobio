const userController = require('../Models/UserSchema')
const Crypto = require('crypto-js')
const Jwt = require('jsonwebtoken');


// Signup
const signUp = async (req, res) => {
    const newUser = new userController(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

//signin
const signIn = async () => {
    try {
        const DB = await users.findOne({ email: req.body.email })
        !DB && res.status(401).json({ response: 'Please check Your Email' })
        const hashedPassword = Crypto.AES.decrypt(DB.password, process.env.Crypto_js)
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        originalPassword != req.body.password && res.status(401).json({ response: "Password and Email doesn't match" })
        const accessToken = Jwt.sign({ id: DB._id }, process.env.Jwt_Key, { expiresIn: '5d' })
        const { password, ...others } = DB._doc
        res.status(200).json({ ...others, accessToken })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { signUp, signIn };
