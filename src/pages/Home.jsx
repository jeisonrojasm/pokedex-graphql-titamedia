import { useState } from 'react'
import { PokemonDetail } from '../components/organisms/PokemonDetail'
import { PokemonList } from '../components/organisms/PokemonList'

export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <div>
      <PokemonList onSelect={setSelectedPokemon} />
      <PokemonDetail name={selectedPokemon} />
    </div>
  )
}
