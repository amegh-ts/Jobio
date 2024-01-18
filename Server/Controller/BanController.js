const userController = require('../Models/UserSchema')


// fetch user
const fetchUser=async(req,res)=>{
    try {
        const user= await userController.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

// update user


module.exports={fetchUser}