import { useEffect, useMemo, useState } from 'react'
import { usePokemons } from '../../hooks/usePokemons'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import { PokemonCard } from '../molecules/PokemonCard'

import icon_principal_pokeball from '../../assets/icons/icon-principal-pokeball.svg'
import { FilterByType } from '../molecules/FilterByType'

import './PokemonList.css'

import { useNavigate } from 'react-router-dom'
import { validatePokemonName } from '../../utils/validations'
import { Button } from '../atoms/Button'
import { Warn } from '../molecules/Warn'

export const PokemonList = ({ onSelect }) => {
  const { pokemons, loading, error } = usePokemons()

  const navigate = useNavigate()

  const [sort, setSort] = useState('name')
  const [search, setSearch] = useState('')

  const searchError = useMemo(() => {
    if (!search) return null

    if (sort === 'name') {
      return validatePokemonName(search)
    }

    return null
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

  if (loading) return <Warn text='Cargando Pokémones...' />
  if (error) return <Warn text='Error al cargar los Pokémon.' />

  return (
    <div className="pokemon-list">
      <div className="pokemon-list__header">
        <div className="pokemon-list__header-title">
          <div className="pokemon-list__header-title-1">
            <Image className="pokemon-list__header-title--img" src={icon_principal_pokeball} alt="Icono principal Pokeball" />
            <Text as="h1" className="pokemon-list__title">Pokédex</Text>
          </div>
          <Button className="pokemon-list__header-favs" onClick={() => navigate('/favorites')}>
            ⭐
          </Button>
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
