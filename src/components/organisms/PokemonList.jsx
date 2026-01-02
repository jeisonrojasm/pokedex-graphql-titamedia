import { useState } from 'react'
import { usePokemons } from '../../hooks/usePokemons'
import { PokemonCard } from '../molecules/PokemonCard'

export const PokemonList = ({ onSelect }) => {
  const { pokemons, loading, error } = usePokemons()

  const [filter, setFilter] = useState('')

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error al cargar Pokémon</p>

  const filtered = filter
    ? pokemons.filter((p) =>
      p.pokemon_v2_pokemontypes.some(
        (t) => t.pokemon_v2_type.name === filter
      )
    )
    : pokemons

  return (
    <div>
      {
        filtered.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={onSelect}
          />
        ))
      }
    </div>
  )
}
