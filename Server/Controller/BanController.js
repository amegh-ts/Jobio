const banController = require('../Models/BanSchema')
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
    try {
        const updateData = await userController.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateData)
    } catch (error) {
        res.status(500).json(error)
    }
}

// ban log
const banLog = async (req, res) => {
    console.log(req.body);
    const banData = new banController(req.body)

    try {
        console.log('ban data', banData);
        await banData.save()
        res.status(200).json(banData)

    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { fetchUser, banUser, banLog }