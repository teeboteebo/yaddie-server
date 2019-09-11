const mongoose = require("mongoose")
const Schema = mongoose.Schema

let ingredientSchema = new Schema({
  name: { type: String, required: true },
  group: { type: String, required: true },
  nutrients: {
    fat1: { type: Number },
    fat2: { type: Number },
    fat3: { type: Number },
    carbs: { type: Number },
    protein: { type: Number },
    salt: { type: Number }
  }
})

module.exports = mongoose.model("Ingredient", ingredientSchema)
