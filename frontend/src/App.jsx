const App = () => {
  const pokemons = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pokemons')
      if (!response.ok) return console.error('Error:', response.statusText)

      const data = await response.json()
      const $ul = document.querySelector('.pokemons')
      data.forEach((pokemon) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${pokemon.name} - ${pokemon.type.join(', ')} <img src="${pokemon.img}" alt="${pokemon.img}" width="120px" />`
        $ul.appendChild($li)
      })
    } catch (err) {
      console.error(err)
    }
  }

  pokemons()
  return (
    <div>
      <ul className="pokemons"></ul>
    </div>
  )
}

export default App
