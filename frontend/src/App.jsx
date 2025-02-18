import { useState, useEffect } from 'react'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  return (
    <div>
      <ul className="pokemons"></ul>
    </div>
  )
}

export default App
