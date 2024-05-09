const Tree = require('../models/tree')
const postTree = async (req, res, next) => {
  try {
    const newTree = new Tree(req.body)

    const treeSaved = await newTree.save()

    return res.status(201).json(treeSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getTrees = async (req, res, next) => {
  try {
    const allTrees = await Tree.find().populate('flower')
    return res.status(200).json(allTrees)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteTree = async (req, res, next) => {
  try {
    const { id } = req.params
    const treeDeleted = await Tree.findByIdAndDelete(id)
    return res.status(200).json(treeDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getTreeById = async (req, res, next) => {
  try {
    const { id } = req.params
    const tree = await Tree.findOne({ _id: id })
    return res.status(200).json(tree)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateTree = async (req, res, next) => {
  try {
    const { id } = req.params
    const newTree = new Tree({
      imgUrl: req.body.imgUrl,
      name: req.body.name,
      climate: req.body.climate,
      leaf: req.body.leaf,
      flower: req.body.flower
    })
    newTree._id = id
    const treeUpdated = await Tree.findByIdAndUpdate(id, newTree, {
      new: true
    })
    return res.status(200).json(treeUpdated)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getTrees,
  postTree,
  deleteTree,
  getTreeById,
  updateTree
}
