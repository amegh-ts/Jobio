const mongoose=require('mongoose')

const FeedSchema=new mongoose.Schema({
    senderId:{type:String,required:true},
    image:{type:String},
    description:{type:String,required:true},
    likes:{type:Number,required:true},
    report:{type:Number,required:true},
    username:{type:String,required:true}
},{
    timestamps:true
})

module.exports=mongoose.model("feeds",FeedSchema)