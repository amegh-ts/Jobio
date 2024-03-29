const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    dob: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    phone: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    city: { type: String },
    district: { type: String },
    photo: { type: String },
    coverphoto: { type: String },
    selectedSkills: { type: Array },
    about: { type: String },
    institute: { type: String },
    course: { type: String },
    year: { type: String },
    state: { type: String },
    lastLogin: { type: String },
    // lastLogin:{type:Date,default:()=>Date.now()}


}, { timestamps: true }) //to add the date and time the value is added to DB or edited

module.exports = mongoose.model("users", UserSchema)  //here 'users' is the name of the collection you are creating