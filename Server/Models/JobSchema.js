const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    job: { type: String, required: true },
    salary: { type: String },
    skills: { type: array },
    userId: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true })


module.exports = mongoose.model("jobs", JobSchema)
