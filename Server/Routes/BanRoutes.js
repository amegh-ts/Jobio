const { fetchUser } = require('../Controller/BanController')

const router = require('express').Router()

// fetch user
router.get('/fetchuser/:id',fetchUser)

module.exports = router
