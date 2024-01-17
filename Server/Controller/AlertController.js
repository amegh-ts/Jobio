const alert=require('../Models/AlertSchema')

const sendAlert = async (req, res) => {
    const newAlert = new notification(req.body)
    try {
        const saveAlert = await alert.save()
        res.status(200).json(saveAlert)
    } catch (error) {
        res.status(500).json(error)
    }
}
