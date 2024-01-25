const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    job: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    salary: { type: String },
    // skills: { type: Array },
    userId: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true })


module.exports = mongoose.model("jobs", JobSchema)
