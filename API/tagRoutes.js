const express = require("express")
const Tag = require("../schemas/Tag")

const router = express.Router()

router.get("/api/tag", async (req, res) => {
  const tags = Tag.find({})
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
})

router.post("/api/tag/", (req, res) => {
  const tag = new Tag(req.body.name)
  console.log(tag)
  tag.save(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
      console.log(tag, "SAVED")
    }
  })
})

router.delete("/api/tag/id/:id/delete", async (req, res) => {
  const tag = await Tag.findById(req.params.id)
  tag.delete(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
    }
  })
})

router.put("/api/tag/id/:id/edit", async (req, res) => {
  let tag = await Tag.findById(req.params.id)
  tag.name = "bytat"
  tag.save(function(err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send()
    }
  })
})

module.exports = router
