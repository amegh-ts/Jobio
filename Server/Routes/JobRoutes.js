const { AddJobs, getAllJobs, deleteJobs } = require('../Controller/JobController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken')

const router = require('express').Router()

// add jobs
router.post('/addjob',verifyToken, AddJobs);
// view all jobs
router.get('/alljobs',verifyToken,getAllJobs);
// delete jobs 
router.delete('/deletejob',verifyToken,deleteJobs);

module.exports = router