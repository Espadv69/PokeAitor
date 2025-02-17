const express = require('express')
const cors = require('cors')
const pokemons = require('./data/data.js')

const app = express()
app.use(cors())
app.use(express.json())
