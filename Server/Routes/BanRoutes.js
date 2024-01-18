const { fetchUser, banUser, banLog, getBanLogs } = require('../Controller/BanController')

const router = require('express').Router()

// fetch user
router.get('/fetchuser/:id',fetchUser)
// ban user
router.post('/banuser/:id',banUser)
// ban logs
router.post('/banlog',banLog)
// ban data
router.get('/getbanlogs',getBanLogs)

module.exports = router
