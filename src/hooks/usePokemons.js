import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS } from '../graphql/queries/getPokemons'

export const usePokemons = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS)

  return {
    pokemons: data?.pokemon_v2_pokemon || [],
    loading,
    error,
  }
}
