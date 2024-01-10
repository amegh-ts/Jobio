const userController=require('../Models/UserSchema')

// Signup
const signUp=async(req,res)=>{
    const newUser = new userController(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports = { signUp };
