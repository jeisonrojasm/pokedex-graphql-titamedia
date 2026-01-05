import { gql } from '@apollo/client'

export const GET_TYPES = gql`
  query GetTypes {
    pokemon_v2_type(order_by: { name: asc }) {
      name
    }
  }
`
