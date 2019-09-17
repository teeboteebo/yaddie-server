const mongoose = require("mongoose")
const Schema = mongoose.Schema

let recipeSchema = new Schema({
  heading:      { type: String, required: true },
  image:        { type: String, required: true },
  time:         { type: Number, required: true },
  portions:     { type: Number, required: true },
  desc:         { type: String, required: true },
  rating:       { type: Number, required: true },
  link:         { type: String, unique: true, required: true },
  tags:         { type: Array, required: true },
  ingredients:  { type: Array, required: true },
  nutrients:    { type: Array, required: true },
  instructions: { type: Array, required: true },
})

module.exports = mongoose.model("Recipe", recipeSchema)
