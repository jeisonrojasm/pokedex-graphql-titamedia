import icon_back_arrow from '../../assets/icons/icon-back-arrow.svg'
import { capitalize } from '../../utils/capitalize'
import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'

import './PokemonDetailHeader.css'

export const PokemonDetailHeader = ({ name, id, onBack }) => (
  <div className="pokemon-detail-header">
    <div className="pokemon-detail-header__content">
      <Button className="pokemon-detail-header__back-btn" onClick={onBack}>
        <Image className="pokemon-detail-header__back-btn--image" src={icon_back_arrow} alt="Back arrow icon" />
      </Button>
      <Text className="pokemon-detail-header__name" as="h2">{capitalize(name)}</Text>
    </div>
    <Text className="pokemon-detail-header__id">{`#${id}`}</Text>
  </div>
)
