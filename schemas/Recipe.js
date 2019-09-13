const mongoose = require("mongoose")
const Schema = mongoose.Schema

let recipeSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  rating: { type: Number, required: true },
  link: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  time: { type: Number, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }]
})

module.exports = mongoose.model("Recipe", recipeSchema)
