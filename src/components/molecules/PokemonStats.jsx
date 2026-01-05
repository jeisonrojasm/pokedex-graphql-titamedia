import { Text } from '../atoms/Text'
import { PokemonStatItem } from './PokemonStatItem'

import './PokemonStats.css'

export const PokemonStats = ({ stats, color }) => (
  <>
    <Text className="pokemon-stats__title" style={{ color }} as='h3'>Base Stats</Text>
    <div className="pokemon-stats__bars">
      {
        Object.entries(stats).map(([name, value]) => (
          <PokemonStatItem
            key={name}
            name={name}
            value={value}
            color={color}
          />
        ))
      }
    </div>
  </>
)
