const { AddFeed } = require('../Controller/FeedController')

const router = require('express').Router()

router.post('/createfeed',AddFeed)

module.exports = router
