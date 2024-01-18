const mongoose = require('mongoose')

const BanSchema = new mongoose.Schema({
    bannedBy: { type: String, required: true },
    banned: { type: String, required: true },
    state: { type: String, required: true },
    reason: { type: String, required: true }
}, { timestamps: true })


module.exports = mongoose.model("bans", BanSchema)
