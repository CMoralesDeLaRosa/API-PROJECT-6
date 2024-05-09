require('dotenv').config()

const express = require('express')

const { connectDB } = require('./src/config/db')
const treeRoutes = require('./src/api/routes/tree')
const flowerRoutes = require('./src/api/routes/flower')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/trees', treeRoutes)
app.use('/api/v1/flowers', flowerRoutes)

app.use('*', (req, res, next) => {
  return res.status(400).json('Rute not found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
