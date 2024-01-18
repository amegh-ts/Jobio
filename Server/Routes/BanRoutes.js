const { fetchUser } = require('../Controller/BanController')

const router = require('express').Router()

// fetch user
router.get('/fetchuser',fetchUser)

module.exports = router
