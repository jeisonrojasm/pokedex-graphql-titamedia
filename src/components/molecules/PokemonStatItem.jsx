import { ProgressBar } from '../atoms/ProgressBar'
import { Text } from '../atoms/Text'

import './PokemonStatItem.css'

export const PokemonStatItem = ({ name, value, color }) => (
  <div className="pokemon-stat-item" style={{ color: 'black' }}>
    <div className="pokemon-stat-item__header">
      <Text style={{ color }} className="pokemon-stat-item__header-title">{name}</Text>
    </div>
    <ProgressBar value={value} color={color} />
  </div>
)
