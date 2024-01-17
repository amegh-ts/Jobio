const mongoose=require('mongoose')

const AlertSchema=new mongoose.Schema({
    user:{type:String,required:true},
    priority:{type:String,required:true},
    alert:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("alerts",AlertSchema)