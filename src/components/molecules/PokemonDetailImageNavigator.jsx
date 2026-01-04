import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import icon_left_arrow from '../../assets/icons/icon-left-arrow.svg'
import icon_right_arrow from '../../assets/icons/icon-right-arrow.svg'

import './PokemonDetailImageNavigator.css'

export const PokemonDetailImageNavigator = ({
  image,
  name,
  onPrev,
  onNext
}) => (
  <div className="pokemon-detail-image-navigator">
    <Button className="pokemon-detail-image-navigator__btn" onClick={onPrev}>
      <Image className="pokemon-detail-image-navigator__arrow" src={icon_left_arrow} alt="Left arrow icon" />
    </Button>
    <Image className="pokemon-detail-image-navigator__image" src={image} alt={name} />
    <Button className="pokemon-detail-image-navigator__btn" onClick={onNext}>
      <Image className="pokemon-detail-image-navigator__arrow" src={icon_right_arrow} alt="Right arrow icon" />
    </Button>
  </div>
)
