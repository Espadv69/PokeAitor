import express, { json } from 'express'
import cors from 'cors'
import pokemons from './data/data.js'

const app = express()
app.use(cors())
app.use(json())

const PORT = 5000

app.get('/', async (req, res) => {
  res.send('Welcome to the Pokemon API!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
