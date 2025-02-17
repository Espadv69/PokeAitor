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

app.get('/api/pokemons', async (req, res) => {
  res.json(pokemons)
})

app.get('/api/pokemons/:id', async (req, res) => {
  const { id } = req.params
  const pokemon = pokemons.find((p) => p.id === parseInt(id))

  if (pokemon) {
    res.json(pokemon)
  } else {
    res.status(404).json({ message: 'Pokemon not found' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
