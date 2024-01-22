const JobSchema = require('../Models/JobSchema');


// add jobs
const AddJobs =   async(req, res) => {
    console.log("************************* ",req.body)
    const feedData = new JobSchema(req.body)
  
    res.status(200).json(feedData)
    try {
        await feedData.save();
    } catch (error) {
        res.status(500).json(error)
    }
}
// view all jobs
// view jobs by user id
// edit jobs
// delete jobs 

module.exports = { AddJobs }
