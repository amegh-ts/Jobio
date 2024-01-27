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
// delete feed
const deleteFeed = async (req, res) => {
    console.log(req.body);
    try {
        // const deleteData=await FeedSchema.findByIdAndDelete(req.body.id)
        // res.status(200).json(deleteData)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { AddFeed, allFeeds, deleteFeed }