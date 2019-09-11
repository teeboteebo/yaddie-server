const mongoose = require("mongoose")
const Schema = mongoose.Schema

let tagSchema = new Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model("Tag", tagSchema)
