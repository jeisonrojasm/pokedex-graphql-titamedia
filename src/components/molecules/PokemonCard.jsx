import { capitalize } from '../../utils/capitalize'
import { Text } from '../atoms/Text'

import './PokemonCard.css'

export const PokemonCard = ({ pokemon, onSelect = () => { } }) => {
  const srcImg = pokemon.pokemon_v2_pokemonsprites[0]?.sprites?.other?.home?.front_default

  return (
    <div onClick={() => onSelect(pokemon.name)} className="pokemon-card">
      <Text className="pokemon-card__id">{`#${pokemon.id}`}</Text>
      <img className="pokemon-card__img" src={srcImg} alt={`pokemon ${pokemon.name}`} />
      <Text className="pokemon-card__name" as="h3">{capitalize(pokemon.name)}</Text>
    </div>
  )
}
