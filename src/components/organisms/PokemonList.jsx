import { useMemo, useState } from 'react'
import { usePokemons } from '../../hooks/usePokemons'
import { PokemonCard } from '../molecules/PokemonCard'
import { Text } from '../atoms/Text'
import { Image } from '../atoms/Image'

import icon_principal_pokeball from '../../assets/icons/icon-principal-pokeball.svg'
import { Input } from '../atoms/Input'
import { FilterByType } from '../molecules/FilterByType'

export const PokemonList = ({ onSelect }) => {
  const { pokemons, loading, error } = usePokemons()

  const [sort, setSort] = useState('name')
  const [search, setSearch] = useState('')

  const filteredAndSorted = useMemo(() => {
    if (!pokemons) return []

    const filtered = pokemons.filter(pokemon => {
      if (!search) return true

      if (sort === 'name') {
        return pokemon.name
          .toLowerCase()
          .includes(search.toLowerCase())
      }

      if (sort === 'id') {
        return pokemon.id.toString().includes(search)
      }

      return true
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'id') return a.id - b.id
      if (sort === 'name') return a.name.localeCompare(b.name)
      return 0
    })
  }, [pokemons, sort, search])


  if (loading) return <Text as='p'>Cargando...</Text>
  if (error) return <Text as='p'>Error al cargar Pokémon</Text>

  return (
    <div>
      <div>
        <div>
          <Image src={icon_principal_pokeball} alt="Icono principal Pokeball" />
          <Text as="h1">Pokédex</Text>
        </div>
        <div>
          <FilterByType
            value={sort}
            search={search}
            onChange={setSort}
            onSearchChange={setSearch}
          />
        </div>
      </div>
      {
        filteredAndSorted.map((pokemon) => (
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
