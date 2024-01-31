const mongoose=require('mongoose')

const ApplicationSchema=new mongoose.Schema({
    employerId:{type:String,required:true},
    applicantId:{type:String,required:true},
    jobId:{type:String,required:true},
    jobDetails:{type:Object,required:true},
    status:{type:String,required:true},
})


module.exports=mongoose.model("applications",ApplicationSchema)
