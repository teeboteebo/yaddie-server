const mongoose = require("mongoose")
const Schema = mongoose.Schema

let ingredientSchema = new Schema({
  name: { type: String, required: true },
  group: { type: String, required: true },
  nutrients: {type: Object, required: true }
})

module.exports = mongoose.model("Ingredient", ingredientSchema)
