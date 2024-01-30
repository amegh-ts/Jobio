const ApplicationSchema = require('../Models/ApplicationSchema')

// apply
const ApplyJob = async (req, res) => {
    // Assuming ApplicationSchema is a Mongoose schema
    const { applicantId, jobId } = req.body;

    try {
        // Check if an application already exists for the given user and job details
        const existingApplication = await ApplicationSchema.findOne({
            applicantId: applicantId,
            jobId: jobId
        });

        console.log('exist app', existingApplication);

        if (existingApplication) {
            // If an application already exists, send an appropriate response
            return res.status(400).json({ message: 'Application already exists for this user and job' });
        }

        // If no existing application is found, create and save a new application
        const applicationData = new ApplicationSchema(req.body);
        await applicationData.save();
        res.status(200).json(applicationData);
    } catch (error) {
        res.status(500).json(error);
    }
};


// view application
const getAllApplications = async (req, res) => {
    try {
        const applicationData = await ApplicationSchema.find();
        res.status(200).json(applicationData)
    } catch (error) {
        res.status(500).json(error)
    }
}
// edit application
const editApplication = async (req, res) => {

}
// delete application
const deleteApplication = async (req, res) => {
    console.log(req.body);
    try {
        const applicationData = await ApplicationSchema.findByIdAndDelete(req.body.id);
        res.status(200).json(applicationData)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { ApplyJob, getAllApplications, deleteApplication }