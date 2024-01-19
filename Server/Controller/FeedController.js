const FeedSchema = require('../Models/FeedSchema')

// create feed
const AddFeed = async (req, res) => {
    console.log(req.body);
    const feedData = new FeedSchema(req.body)
    try {
        await feedData.save();
    } catch (error) {
        res.status(500).json(error)
    }
}
// view all feed
// view feeds
// edit feed
// delete feed

module.exports = { AddFeed }