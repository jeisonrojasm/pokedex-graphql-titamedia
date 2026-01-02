import { useState } from 'react'
import { PokemonList } from '../components/organisms/PokemonList'
import { PokemonDetail } from '../components/organisms/PokemonDetail'

export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <div>
      <PokemonList onSelect={setSelectedPokemon} />
      <PokemonDetail name={selectedPokemon} />
    </div>
  )
}
