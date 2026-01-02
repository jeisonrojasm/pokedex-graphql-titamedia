import { Badge } from '../atoms/Badge'

export const PokemonDetailTypes = ({ types }) => (
  <div>
    {types.map(type => (
      <Badge key={type}>{type}</Badge>
    ))}
  </div>
)
