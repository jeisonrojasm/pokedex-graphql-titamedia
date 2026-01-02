import { Text } from '../atoms/Text'

export const PokemonDetailTypes = ({ types }) => (
  <div>
    {types.map(type => (
      <Text key={type}>{type}</Text>
    ))}
  </div>
)
