import { gql } from '@apollo/client'

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($name: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight

      pokemon_v2_pokemonsprites(limit: 1) {
        sprites
      }

      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }

      pokemon_v2_pokemonmoves(limit: 3) {
        pokemon_v2_move {
          name
        }
      }

      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }

      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }

        pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          limit: 1
        ) {
          flavor_text
        }
      }
    }
  }
`
