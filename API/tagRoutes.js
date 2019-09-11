const express = require("express")
const Tag = require("../schemas/Tag")

const router = express.Router()

/**
 * Fetch all availale Qnas
 */
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

module.exports = router
