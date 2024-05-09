const mongoose = require('mongoose')

const flowerSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    period: { type: String, required: true },
    color: { type: String, required: true }
  },
  { timestamps: true, colletion: 'trees' }
)

const Flower = mongoose.model('flowers', flowerSchema, 'flowers')

module.exports = Flower
