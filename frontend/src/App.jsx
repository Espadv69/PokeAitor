import { useState, useEffect } from 'react'

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
  }, [])

  return (
    <div>
      <ul className="pokemons"></ul>
    </div>
  )
}

export default App
