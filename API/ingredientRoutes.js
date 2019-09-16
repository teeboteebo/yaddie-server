const express = require("express")
const Ingredient = require("../schemas/Ingredient")

const router = express.Router()

router.get("/api/ingredients", async (req, res) => {
  const Ingredient = Ingredient.find({})
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
})

router.post("/api/ingredients/", (req, res) => {
  const ingredient = new Ingredient(req.body.content)
  console.log(ingredient)
  ingredient.save(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
      console.log(ingredient, "SAVED")
    }
  })
})

router.put("/api/ingredients/id/:id/edit", async (req, res) => {
  let ingredient = await Ingredient.findById(req.params.id)
  ingredient.name = req.body.content.name
  ingredient.group = req.body.content.group
  ingredient.nutrients.fat1 = req.body.content.nutrients.fat1
  ingredient.nutrients.fat2 = req.body.content.nutrients.fat2
  ingredient.nutrients.fat3 = req.body.content.nutrients.fat3
  ingredient.nutrients.carbs = req.body.content.nutrients.carbs
  ingredient.nutrients.protein = req.body.content.nutrients.protein
  ingredient.nutrients.salt = req.body.content.nutrients.salt
  ingredient.save(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
    }
  })
})

router.delete("/api/ingredients/id/:id/delete", async (req, res) => {
  const ingredient = await Ingredient.findById(req.params.id)
  ingredient.delete(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
    }
  })
})

module.exports = router
