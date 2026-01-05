import { useQuery } from '@apollo/client/react'
import { GET_TYPES } from '../../graphql/queries/getTypes'

import { capitalize } from '../../utils/capitalize'
import './FilterByType.css'

export const FilterByType = ({ filter, onChange }) => {
  const { data } = useQuery(GET_TYPES)

  return (
    <select
      className="filter-by-type"
      value={filter}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    >
      <option value="">All</option>

      {data?.pokemon_v2_type.map((type) => (
        <option key={type.name} value={type.name}>
          {capitalize(type.name)}
        </option>
      ))}
    </select>
  )
}
