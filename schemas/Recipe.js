const mongoose = require("mongoose")
const Schema = mongoose.Schema

let recipeSchema = new Schema({
  heading: { type: String, required: true },
  image: { type: String, required: true },
  time: { type: Number, required: true },
  portions: { type: Number, required: true },
  desc: { type: String, required: true },
  rating: { type: Number, required: true },
  link: { type: String, unique: true, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
  ingredients: [
    { type: Schema.Types.ObjectId, ref: "Ingredient", required: true }
  ],
  instructions: { type: Array, required: true },
  timer: { type: String }
})

module.exports = mongoose.model("Recipe", recipeSchema)
