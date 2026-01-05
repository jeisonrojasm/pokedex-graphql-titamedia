import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemon(order_by: { name: asc }) {
      id
      name
      pokemon_v2_pokemonsprites(limit: 1) {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`
