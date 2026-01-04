import { capitalize } from '../../utils/capitalize'
import { Text } from '../atoms/Text'

import './PokemonDetailTypes.css'

export const PokemonDetailTypes = ({ types, style, className }) => (
  <div className="pokemon-detail-types">
    {
      types.map(type => (
        <Text className={className} style={style} key={type}>{capitalize(type)}</Text>
      ))
    }
  </div>
)
