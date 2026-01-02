import { useState } from 'react'
import { usePokemons } from '../../hooks/usePokemons'
import { PokemonCard } from '../molecules/PokemonCard'
import { Text } from '../atoms/Text'

export const PokemonList = ({ onSelect }) => {
  const { pokemons, loading, error } = usePokemons()

  const [filter, setFilter] = useState('')

  if (loading) return <Text as='p'>Cargando...</Text>
  if (error) return <Text as='p'>Error al cargar Pokémon</Text>

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
