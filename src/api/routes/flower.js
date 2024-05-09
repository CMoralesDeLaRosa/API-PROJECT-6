const {
  getFlowers,
  postFlower,
  deleteFlower,
  updateFlower
} = require('../controllers/flower')

const flowerRoutes = require('express').Router()

flowerRoutes.get('/', getFlowers)
flowerRoutes.post('/', postFlower)
flowerRoutes.delete('/:id', deleteFlower)
flowerRoutes.put('/:id', updateFlower)

module.exports = flowerRoutes
