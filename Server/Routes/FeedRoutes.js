const { AddFeed, allFeeds } = require('../Controller/FeedController')

const router = require('express').Router()

// create feed
router.post('/createfeed',AddFeed);
// all feeds
router.get('/allfeeds',allFeeds);
// view feeds
// edit feed
// delete feed

module.exports = router
