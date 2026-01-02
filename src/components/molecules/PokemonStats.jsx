import { PokemonStatItem } from './PokemonStatItem'

export const PokemonStats = ({ stats, color }) => (
  <>
    <h3>Base Stats</h3>
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
