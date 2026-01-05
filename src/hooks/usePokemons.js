import { useEffect } from 'react'
import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS } from '../graphql/queries/getPokemons'
import { useFavorites } from './useFavorites'

export const usePokemons = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS)
  const { setTotalPokemons } = useFavorites()

  useEffect(() => {
    if (data?.pokemon_v2_pokemon) {
      setTotalPokemons(data.pokemon_v2_pokemon)
    }
  }, [data, setTotalPokemons])

  return {
    pokemons: data?.pokemon_v2_pokemon || [],
    loading,
    error,
  }
}
