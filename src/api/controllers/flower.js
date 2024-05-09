const Flower = require('../models/flower')
const postFlower = async (req, res, next) => {
  try {
    const newFlower = new Flower(req.body)

    const flowerSaved = await newFlower.save()

    return res.status(201).json(flowerSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getFlowers = async (req, res, next) => {
  try {
    const allFlowers = await Flower.find()
    return res.status(200).json(allFlowers)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteFlower = async (req, res, next) => {
  try {
    const { id } = req.params
    const flowerDeleted = await Flower.findByIdAndDelete(id)
    return res.status(200).json(flowerDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateFlower = async (req, res, next) => {
  try {
    const { id } = req.params
    const newFlower = new Flower({
      imgUrl: req.body.imgUrl,
      name: req.body.name,
      period: req.body.period,
      color: req.body.color
    })
    newFlower._id = id
    const flowerUpdated = await Flower.findByIdAndUpdate(id, newFlower, {
      new: true
    })
    return res.status(200).json(flowerUpdated)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getFlowers,
  postFlower,
  deleteFlower,
  updateFlower
}
