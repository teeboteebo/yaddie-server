const express = require("express")
const Recipe = require("../schemas/Recipe")

const router = express.Router()

router.get("/api/recipes", async (req, res) => {
  const recipes = Recipe.find()
    .then(data => {
      res.status(200).send(data)
    })
})

router.get("/api/recipes/latest", async (req, res) => {
  const recipes = Recipe.find({})
    .sort({ added: -1 })
    .limit(7)
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
})

// Find one recipe by id

router.get("/api/recipes/id/:id", (req, res) => {
  const recipe = Recipe.findById(req.params.id)
    .exec()
    .catch(err => {
      return "No match"
    })
    .then(data => {
      res.status(200).send(data)
    })
})

router.get("/api/recipes/search/:search", async (req, res) => {
  let recipes = await Recipe.find({
    heading: new RegExp(req.params.search, "i")
  })
    .catch(err => {
      return
    })
    .then(data => {
      res.status(200).send(data)
    })
})


// Handle search page requests
router.get("/api/recipes/search", async (req, res) => {
  const category = req.query.kategori ? new RegExp(req.query.kategori, "i") : ""
  const recipeName = req.query.namn ? new RegExp(req.query.namn, "i") : ""

  // Both tag and name
  if (category && recipeName) {
    Recipe.find({ tags: category, heading: recipeName }).then(data => {
      res.status(200).send(data)
    })
  }
  // Only tag(s)
  else if (category && !recipeName) {
    Recipe.find({ tags: category }).then(data => {
      res.status(200).send(data)
    })
  }

  // Only name(s)
  else if (!category && recipeName) {
    Recipe.find({ heading: recipeName }).then(data => {
      res.status(200).send(data)
    })
  }
})

router.get("/api/recipes/populated", (req, res) => {
  Recipe.find()
    // .populate("tags")
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
})

router.get("/api/recipes/populated/:id", (req, res) => {
  const recipe = Recipe.findById(req.params.id)
    .populate("tags")
    .populate("ingredients")
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
})

router.post("/api/recipes/", (req, res) => {
  const recipe = new Recipe(req.body.content)
  recipe.save(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
      console.log(recipe, "SAVED")
    }
  })
})

router.put("/api/recipes/id/:id/edit", async (req, res) => {
  let recipe = await Recipe.findById(req.params.id)
  recipe.name = req.body.content.name
  recipe.desc = req.body.content.desc
  recipe.rating = req.body.content.rating
  recipe.link = req.body.content.link
  recipe.image = req.body.content.image
  recipe.time = req.body.content.time
  recipe.tags = req.body.content.tags

  recipe.save(function (err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
    }
  })
})

router.delete("/api/recipes/id/:id/delete", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  recipe.delete(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
    }
  })
})

module.exports = router
