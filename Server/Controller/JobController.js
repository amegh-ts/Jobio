const JobSchema = require('../Models/JobSchema');

// add jobs
const AddJobs = async (req, res) => {
    const feedData = new JobSchema(req.body)
    try {
        await feedData.save();
        console.log('200 Successful');
        res.status(200).json(feedData)
    } catch (error) {
        res.status(500).json(error)
    }
}
// view all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobData = await JobSchema.find();
        res.status(200).json(jobData)
    } catch (error) {
        res.status(500).json(error)
    }
}
// delete jobs 
const deleteJobs = async (req, res) => {
    console.log(req.params.id);
    try {
        const deleteData = await JobSchema.findByIdAndDelete(req.params.id);
        console.log('200 Successful');
        res.status(200).json(deleteData)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { AddJobs, getAllJobs, deleteJobs }