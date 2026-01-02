import { ProgressBar } from '../atoms/ProgressBar'
import { Text } from '../atoms/Text'

export const PokemonStatItem = ({ name, value, color }) => (
  <div>
    <div>
      <Text>{name}</Text>
      <Text>{value}</Text>
    </div>
    <ProgressBar value={value} color={color} />
  </div>
)
