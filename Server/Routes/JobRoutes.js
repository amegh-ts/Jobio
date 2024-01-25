const { ApplyJob, getAllApplications, deleteApplication } = require('../Controller/ApplicationController');
const { AddJobs, getAllJobs, deleteJobs } = require('../Controller/JobController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken')

const router = require('express').Router()

//****************************** jobs ******************************
// add jobs
router.post('/addjob',verifyToken, AddJobs);
// view all jobs
router.get('/alljobs',verifyToken,getAllJobs);
// delete jobs 
router.delete('/deletejob',verifyToken,deleteJobs);


//****************************** job applications******************************
// apply job
router.post('/applyjob',verifyToken,ApplyJob)
// view application
router.get('/allApplications',verifyToken,getAllApplications);
// delete application
router.delete('/deleteApplication',verifyToken,deleteApplication);

module.exports = router