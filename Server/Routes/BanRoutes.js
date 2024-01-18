const { fetchUser, banUser, banLog } = require('../Controller/BanController')

const router = require('express').Router()

// fetch user
router.get('/fetchuser/:id',fetchUser)
// ban user
router.post('/banuser/:id',banUser)
// ban logs
router.post('/banlog',banLog)

module.exports = router
