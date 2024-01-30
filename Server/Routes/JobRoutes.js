const { ApplyJob, getAllApplications, deleteApplication, editApplication } = require('../Controller/ApplicationController');
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
// edit application
router.put('/editapplication/:id',verifyToken,editApplication)
// delete application
router.delete('/deleteApplication/:id',verifyToken,deleteApplication);

module.exports = router