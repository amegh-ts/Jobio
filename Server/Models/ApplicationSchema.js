const mongoose=require('mongoose')

const ApplicationSchema=new mongoose.Schema({
    senderId:{type:String,required:true},
    applicantId:{type:String,required:true},
    applicantName:{type:String,required:true},
    jobId:{type:String,required:true},
    job:{type:String,required:true},
    senderId:{type:String,required:true},
})


module.exports=mongoose.model("applications",ApplicationSchema)
