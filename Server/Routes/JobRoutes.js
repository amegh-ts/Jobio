const { AddJobs } = require('../Controller/JobController')
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken')

const router = require('express').Router()

// add jobs
router.post('/addjob',verifyToken, AddJobs)
// view all jobs
// view jobs by user id
// edit jobs
// delete jobs 


module.exports = router