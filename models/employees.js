const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    admin: { type: Boolean, required: true, unique: false }
})
module.exports = mongoose.model("boat", boatSchema)