const express = require('express')
const cors = require('cors')
const pokemons = require('./data/data.js')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

app.get('/', async (req, res) => {
  res.send('Welcome to the Pokemon API!')
})
