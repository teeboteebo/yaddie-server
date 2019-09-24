const mongoose = require("mongoose")
const Schema = mongoose.Schema

let recipeSchema = new Schema({
  heading:      { type: String, required: true },
  image:        { type: String },
  cookingTime:  { type: Number, required: true },
  portions:     { type: Number, required: true },
  summary:      { type: String, required: true },
  rating:       { type: Number },
  tags:         { type: Array, required: true },
  ingredients:  [{ 
    displayName:    { type: String },
    ingredientType: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    quantity:       { type: Number, required: true },
    unit:           { type: String, required: true }
  }],
  nutrients:    { type: Array, required: true },
  instructions: { type: Array, required: true },
})

module.exports = mongoose.model("Recipe", recipeSchema)
