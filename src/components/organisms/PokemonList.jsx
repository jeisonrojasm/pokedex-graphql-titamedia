import { useEffect, useMemo, useState } from 'react'
import { usePokemons } from '../../hooks/usePokemons'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import { PokemonCard } from '../molecules/PokemonCard'

import icon_principal_pokeball from '../../assets/icons/icon-principal-pokeball.svg'
import { Sorting } from '../molecules/Sorting'

import './PokemonList.css'

import { useNavigate } from 'react-router-dom'
import { validatePokemonName } from '../../utils/validations'
import { Button } from '../atoms/Button'
import { Warn } from '../molecules/Warn'

export const PokemonList = ({ onSelect }) => {
  const { pokemons, loading, error } = usePokemons()
  const [filter, setFilter] = useState("")

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

    // 1. Filtrado por tipo
    const byType = filter
      ? pokemons.filter((p) => {
        console.log(p)
        return p.pokemon_v2_pokemontypes.some(
          (t) => t.pokemon_v2_type.name === filter
        )
      }
      )
      : pokemons

    // Si hay error de búsqueda, no aplicamos búsqueda ni orden
    if (searchError) return byType

    // 2. Filtrado por búsqueda
    const bySearch = byType.filter(pokemon => {
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

    // 3. Ordenamiento
    return [...bySearch].sort((a, b) => {
      if (sort === 'id') return a.id - b.id
      if (sort === 'name') return a.name.localeCompare(b.name)
      return 0
    })
  }, [pokemons, filter, sort, search, searchError])

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
          <Sorting
            value={sort}
            search={search}
            onChange={setSort}
            onSearchChange={setSearch}
            filter={filter}
            setFilter={setFilter}
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
