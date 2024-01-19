const FeedSchema = require('../Models/FeedSchema')

// create feed
const AddFeed = async (req, res) => {
    const feedData = new FeedSchema(req.body)
    try {
        await feedData.save();
    } catch (error) {
        res.status(500).json(error)
    }
}
// view all feed
const allFeeds = async (req, res) => {
    try {
        const data = await FeedSchema.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
// view feeds
// edit feed
// delete feed

module.exports = { AddFeed ,allFeeds}