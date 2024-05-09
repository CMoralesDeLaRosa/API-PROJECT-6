const {
  getTrees,
  postTree,
  updateTree,
  deleteTree,
  getTreeById
} = require('../controllers/tree')

const treeRoutes = require('express').Router()

treeRoutes.get('/getById/:id', getTreeById)
treeRoutes.get('/', getTrees)
treeRoutes.post('/', postTree)
treeRoutes.delete('/:id', deleteTree)
treeRoutes.put('/:id', updateTree)

module.exports = treeRoutes
