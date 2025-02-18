import { useState, useEffect } from 'react'

import './css/App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pokemons')
        if (!response.ok) throw new Error(`Error: ${response.statusText}`)

        const data = await response.json()
        setPokemons(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <div>
      <h1 className="pokeTitle">PokeAPI</h1>
      <ul className="pokemons">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <p className="pokeName">{pokemon.name}</p>
            <p className="pokeType">{pokemon.type.join(', ')}</p>
            <img
              className="pokeImage"
              src={pokemon.img}
              alt={pokemon.name}
              width="100px"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
