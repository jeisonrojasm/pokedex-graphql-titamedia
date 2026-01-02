import { Text } from '../atoms/Text'
import { PokemonStatItem } from './PokemonStatItem'

export const PokemonStats = ({ stats, color }) => (
  <>
    <Text as='h3'>Base Stats</Text>
    <div>
      {Object.entries(stats).map(([name, value]) => (
        <PokemonStatItem
          key={name}
          name={name}
          value={value}
          color={color}
        />
      ))}
    </div>
  </>
)
