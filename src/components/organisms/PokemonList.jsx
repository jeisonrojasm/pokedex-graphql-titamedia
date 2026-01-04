import { useEffect, useMemo, useState } from 'react'
import { usePokemons } from '../../hooks/usePokemons'
import { PokemonCard } from '../molecules/PokemonCard'
import { Text } from '../atoms/Text'
import { Image } from '../atoms/Image'

import icon_principal_pokeball from '../../assets/icons/icon-principal-pokeball.svg'
import { FilterByType } from '../molecules/FilterByType'

import './PokemonList.css'

import { validatePokemonName } from '../../utils/validations'

export const PokemonList = ({ onSelect }) => {
  const { pokemons, loading, error } = usePokemons()

  const [sort, setSort] = useState('name')
  const [search, setSearch] = useState('')

  const [searchError, setSearchError] = useState(null)

  useEffect(() => {
    if (!search) {
      setSearchError(null)
      return
    }

    if (sort === 'name') {
      const error = validatePokemonName(search)
      setSearchError(error)
    } else {
      setSearchError(null)
    }
  }, [search, sort])


  const filteredAndSorted = useMemo(() => {
    if (!pokemons) return []

    if (searchError) return pokemons

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
  }, [pokemons, sort, search, searchError])

  if (loading) return <Text as='p'>Cargando...</Text>
  if (error) return <Text as='p'>Error al cargar Pokémon</Text>

  return (
    <div className="pokemon-list">
      <div className="pokemon-list__header">
        <div className="pokemon-list__header-title">
          <Image className="pokemon-list__header-title--img" src={icon_principal_pokeball} alt="Icono principal Pokeball" />
          <Text as="h1" className="pokemon-list__title">Pokédex</Text>
        </div>
        <div>
          <FilterByType
            value={sort}
            search={search}
            onChange={setSort}
            onSearchChange={setSearch}
          />
          {searchError && (
            <Text as="p" className="pokemon-list__error">
              {searchError}
            </Text>
          )}
        </div>
      </div>
      <div className="pokemon-list__cards">
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
    </div>
  )
}
