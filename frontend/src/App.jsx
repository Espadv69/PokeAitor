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
  const [loandingImages, setLoandingImages] = useState({})

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

  const handleImageLoad = (name) => {
    setLoandingImages((prev) => ({ ...prev, [name]: false }))
  }

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
                    color: typeColor[t] || 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {t}{' '}
                </span>
              ))}
            </p>
            {loandingImages[pokemon.name] && (
              <div className="image-loader"></div>
            )}
            <img
              className={`pokeImage ${
                loandingImages[pokemon.name] ? 'hidden' : 'fade-in'
              }`}
              src={pokemon.img}
              alt={pokemon.name}
              width="100px"
              onLoad={() => handleImageLoad(pokemon.name)}
              onError={() => handleImageLoad(pokemon.name)}
            />
            <strong>#{String(pokemon.id).padStart(3, '0')}</strong>
          </li>
        ))}
      </ul>

      {selectedPokemon && (
        <div className="modal-overlay" onClick={() => setSelectedPokemon(null)}>
          <div className="modal-content show-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-content__name">{selectedPokemon.name}</h2>
            <img
              src={selectedPokemon.img}
              alt={selectedPokemon.name}
              width="150px"
              className="modal-content__image"
            />
            <p className="modal-content__type">
              Type:{' '}
              {selectedPokemon.type.map((t) => (
                <span
                  key={t}
                  style={{
                    color: typeColor[t] || 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {t}{' '}
                </span>
              ))}
            </p>
            <p className="modal-content__description">
              {selectedPokemon.description}
            </p>

            <ul className="modal-content__stats">
              <h3>Stats:</h3>
              <li>
                Hp: <strong>{selectedPokemon.stats.hp}</strong>
              </li>
              <li>
                Attack: <strong>{selectedPokemon.stats.attack}</strong>
              </li>
              <li>
                Defense: <strong>{selectedPokemon.stats.defense}</strong>
              </li>
              <li>
                Special Attack:{' '}
                <strong>{selectedPokemon.stats.specialAttack}</strong>
              </li>
              <li>
                Special Defense:{' '}
                <strong>{selectedPokemon.stats.specialDefense}</strong>
              </li>
              <li>
                Speed: <strong>{selectedPokemon.stats.speed}</strong>
              </li>
            </ul>

            <button
              className="modal-content__button"
              onClick={() => setSelectedPokemon(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
