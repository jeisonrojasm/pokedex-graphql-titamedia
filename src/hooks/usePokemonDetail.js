import { useQuery } from '@apollo/client/react'
import { GET_POKEMON_DETAIL } from '../graphql/queries/getPokemonDetail'

export const usePokemonDetail = (name) => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name },
    skip: !name,
  })

  const pokemon = data?.pokemon_v2_pokemon?.[0]

  return {
    pokemon,
    loading,
    error,
  }
}
