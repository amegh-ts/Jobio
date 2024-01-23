const chatSchema = require('../Models/ChatSchema')

// create chat
const createChat = async (req, res) => {
    const { firstId, secondId } = req.body
    try {
        const chat = await chatSchema.findOne({
            members: { $all: [firstId, secondId] }
        })
        if (chat) return res.status(200).json(chat)

        const newChat = new chatSchema({
            members: [firstId, secondId]
        })

        const response = await newChat.save()
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


// find user chats
const findUserChats = async (req, res) => {
    const userId = req.params.userId
    try {
        const chats = await chatSchema.find({
            members: { $in: [userId] }
        });
        res.status(200).json(chats)


    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


// find chat
const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;
    try {
        const chat = await chatSchema.findOne({
            members: { $all: [firstId, secondId] }
        });
        res.status(200).json(chat)


    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}



const clearChatsAtEndOfDay = async () => {
    try {
        // Add logic to find and remove all chats here
        await chatSchema.deleteMany({});
        console.log('All chats cleared from the database.');
    } catch (error) {
        console.error('Error clearing chats:', error);
    }
}

// Schedule the task to run at the end of each day (24-hour interval)
const interval = 24 * 60 * 60 * 1000; 
clearChatsAtEndOfDay();

setInterval(clearChatsAtEndOfDay, interval);


module.exports = { createChat,findUserChats,findChat };
