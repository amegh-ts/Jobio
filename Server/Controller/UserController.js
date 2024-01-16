const userController = require('../Models/UserSchema')
const Crypto = require('crypto-js')
const Jwt = require('jsonwebtoken');


// Signup
const signUp = async (req, res) => {
    req.body.password = Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
    const newUser = new userController(req.body)
    newUser.lastLogin = Date.now();
    console.log('new user', newUser);
    try {
        const savedUser = await newUser.save()
        console.log('saved user', savedUser);
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

//signin
const signIn = async (req, res) => {
    try {
        const DB = await userController.findOne({ email: req.body.email });
        !DB && res.status(401).json({ response: 'Please check Your Email' });

        // Check if the user is inactive and update the state to active
        if (DB.state === 'inactive') {
            await userController.findByIdAndUpdate(DB._id, { $set: { state: 'active' } });
        }

        const hashedPassword = Crypto.AES.decrypt(DB.password, process.env.Crypto_js);
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8);
        originalPassword !== req.body.password && res.status(401).json({ response: "Password and Email don't match" });

        // Update lastLogin on successful login
        await userController.findByIdAndUpdate(DB._id, { $set: { lastLogin: Date.now() } });

        const accessToken = Jwt.sign({ id: DB._id }, process.env.Jwt_Key, { expiresIn: '5d' });
        const { password, ...others } = DB._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
};

//all users
const allUsers = async (req, res) => {
    try {
        const data = await userController.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

// view profile
const viewProfile = async (req, res) => {
    try {
        const id = await userController.findById(req.params.id)
        // console.log('id=', id);
        const hashedPassword = Crypto.AES.decrypt(id.password, process.env.Crypto_js)
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        const { password, ...others } = id._doc
        res.status(200).json({ ...others, originalPassword })
    } catch (error) {
        res.status(500).json(error)
    }
}

// edit profile
const editProfile = async (req, res) => {
    try {
        const updateData = await userController.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateData)
    } catch (error) {
        res.status(500).json(error)
    }
}

// delete profile
const deleteProfile = async (req, res) => {
    try {
        const deleteData = await userController.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteData)
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { signUp, signIn, allUsers, viewProfile, editProfile, deleteProfile };
