const alert = require('../Models/AlertSchema')

const sendAlert = async (req, res) => {
    const newAlert = new notification(req.body)
    try {
        const saveAlert = await alert.save()
        res.status(200).json(saveAlert)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAlert = async (req, res) => {
    try {
        const data = await notification.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { sendAlert, getAlert };