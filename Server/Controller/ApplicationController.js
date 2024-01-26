const ApplicationSchema = require('../Models/ApplicationSchema')

// apply
const ApplyJob = async (req, res) => {
    const applicationData = new ApplicationSchema(req.body)
    console.log(applicationData);
    try {
        await feedData.save();
        res.status(200).json(applicationData)
    } catch (error) {
        res.status(500).json(error)
    }
}
// view application
const getAllApplications = async (req, res) => {
    try {
        const applicationData = await ApplicationSchema.find();
        res.status(200).json(applicationData)
    } catch (error) {
        res.status(500).json(error)
    }
}
// delete application
const deleteApplication = async (req, res) => {
    console.log(req.body);
    console.log('asdfghjkl');
    try {
        const applicationData = await ApplicationSchema.findByIdAndDelete(req.body.id);
        res.status(200).json(applicationData)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { ApplyJob, getAllApplications, deleteApplication }