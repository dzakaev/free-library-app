const Review = require("../models/Review.model")

module.exports.reviewsController = {
  getReview: async (req, res)=> {
    const reviews = await Review.find()

    res.json(reviews)
  },
  createReview: async (req, res) => {
    const { text } = req.body
    const { id } = req.params
    try {
      const review = await Review.create({
        user: id,
        text,
      })

      return res.json(review)
    } catch (e) {
      return res.status(401).json(e.toString())
    }
  },
  deleteReview: async (req, res) => {
    const { id } = req.params

    try {
      const review = await Review.findById(id)

      if(review.user.toString() === req.user.id) {
        await review.remove()
        return res.json("Удалено")
      }

    } catch (e) {
      return res.status(401).json("Ошибка: "+ e.toString())
    }
  }
}