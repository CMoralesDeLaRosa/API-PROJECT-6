const mongoose = require('mongoose')

const treeSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    climate: { type: String, required: true },
    leaf: { type: String, required: true },
    flower: { type: mongoose.Types.ObjectId, required: false, ref: 'flowers' }
  },
  { timestamps: true, colletion: 'trees' }
)

const Tree = mongoose.model('trees', treeSchema, 'trees')

module.exports = Tree
