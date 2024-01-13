const mongoose=require('mongoose')
const ForgotPasswordSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    otp:{type:String,required:true},
    otpExpiration:{type:Date,required:true}
})

module.exports=mongoose.model('passwordrecovery',ForgotPasswordSchema)
