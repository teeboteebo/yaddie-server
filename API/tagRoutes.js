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

module.exports = router
