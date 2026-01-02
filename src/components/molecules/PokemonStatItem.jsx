import { ProgressBar } from '../atoms/ProgressBar'

export const PokemonStatItem = ({ name, value, color }) => (
  <div>
    <div>
      <span>{name}</span>
      <span>{value}</span>
    </div>
    <ProgressBar value={value} color={color} />
  </div>
)
