const ApplicationSchema=require('../Models/ApplicationSchema')

// apply
const ApplyJob = async (req, res) => {
    const applicationData = new ApplicationSchema(req.body)
    res.status(200).json(applicationData)
    try {
        await feedData.save();
    } catch (error) {
        res.status(500).json(error)
    }
}
// view application
// delete application