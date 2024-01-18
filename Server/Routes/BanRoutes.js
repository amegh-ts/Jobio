const { fetchUser, banUser } = require('../Controller/BanController')

const router = require('express').Router()

// fetch user
router.get('/fetchuser/:id',fetchUser)

// ban user
router.post('/banuser/:id',banUser)

module.exports = router
