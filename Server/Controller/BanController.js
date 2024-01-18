const userController = require('../Models/UserSchema')


// fetch user
const fetchUser=async(req,res)=>{
    try {
        const user= await userController.findById(req.body._id)
    } catch (error) {
        res.status(500).json(error)
    }
}

// update user


module.exports={fetchUser}