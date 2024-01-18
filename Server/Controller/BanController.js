const userController = require('../Models/UserSchema')


// fetch user
const fetchUser = async (req, res) => {
    try {
        const user = await userController.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

// ban/unban user
const banUser = async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    try {
        const updateData = await userController.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        console.log('successsss');
        res.status(200).json(updateData)
    } catch (error) {
        res.status(500).json(error)
    }
}

// ban log
const banLog = async (req, res) => {
    console.log(req.body);
    try {
        const banData = await new userController(req.body)
        console.log('ban data', banData);
        res.status(200).json(banData)

    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { fetchUser, banUser, banLog }