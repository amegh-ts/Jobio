const { AddJobs, getAllJobs, jobsById, deleteJobs } = require('../Controller/JobController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken')

const router = require('express').Router()

// add jobs
router.post('/addjob',verifyToken, AddJobs);
// view all jobs
router.get('/alljobs',verifyToken,getAllJobs);
// view jobs by user id
router.get('/jobById',verifyToken,verifyTokenAndAuthorization,jobsById);
// delete jobs 
router.delete('/deletejob',verifyToken,deleteJobs);

module.exports = router