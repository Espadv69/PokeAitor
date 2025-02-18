import { useState, useEffect } from 'react'

import './css/App.css'

const typeColor = {
  Fire: 'orange',
  Water: 'royalblue',
  Grass: 'green',
  Electric: 'yellow',
  Ice: 'lightblue',
  Fighting: 'brow',
  Poison: 'purple',
  Ground: 'sienna',
  Flying: 'gray',
  Psychic: 'pink',
  Bug: 'limegreen',
  Rock: 'darkgray',
  Ghost: 'indigo',
  Dragon: 'darkblue',
  Dark: 'dark',
  Steel: 'slategray',
  Fairy: 'hotpink',
}

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)

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
          <li
            key={pokemon.name}
            className="pokeLi"
            onClick={() => setSelectedPokemon(pokemon)}
          >
            <p className="pokeName">{pokemon.name}</p>
            <p className="pokeType">
              {pokemon.type.map((t) => (
                <span
                  key={t}
                  style={{
                    color: typeColor[t] || 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {t}{' '}
                </span>
              ))}
            </p>
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
