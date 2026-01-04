import { useState } from 'react'
import { FavoritesList } from '../components/organisms/FavoritesList'
import { PokemonDetail } from '../components/organisms/PokemonDetail'
import { PokemonList } from '../components/organisms/PokemonList'
import './Home.css'

export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <div className="home">
      <PokemonList onSelect={setSelectedPokemon} />
      <PokemonDetail name={selectedPokemon} />
      <FavoritesList />
    </div>
  )
}
