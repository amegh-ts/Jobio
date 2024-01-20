const { AddJobs } = require('../Controller/JobController')

const router = require('express').Router()

// add jobs
router.post('/addjob', AddJobs)
// view all jobs
// view jobs by user id
// edit jobs
// delete jobs 


module.exports = router