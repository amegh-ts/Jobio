const mongoose=require('mongoose')
const ChatSchema=new mongoose.Schema({
    members: Array,
},{
    timestamps:true,
})

module.exports=mongoose.model("chats",ChatSchema) 