const alert = require('../Models/AlertSchema')

// send alert
const sendAlert = async (req, res) => {
    const newAlert = new alert(req.body)
    console.log(newAlert);
    try {
        const saveAlert = await newAlert.save()
        res.status(200).json(saveAlert)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get alert
const getAlert = async (req, res) => {
    try {
        const data = await alert.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

// delete alert
const deleteAlert=async(req,res)=>{
    try {
        // const deleteData=await alert.findByIdAndDelete()
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { sendAlert, getAlert,deleteAlert };