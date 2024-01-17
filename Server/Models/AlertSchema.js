const mongoose=require('mongoose')

const AlertSchema=new mongoose.Schema({
    user:{type:String,required:true},
    priority:{type:String,required:true},
    notification:{type:String,required:true}
})

module.exports=mongoose.model("notification",AlertSchema)