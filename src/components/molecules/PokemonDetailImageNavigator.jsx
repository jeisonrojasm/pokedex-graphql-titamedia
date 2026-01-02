import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import icon_left_arrow from '../../assets/icons/icon-left-arrow.svg'
import icon_right_arrow from '../../assets/icons/icon-right-arrow.svg'

export const PokemonDetailImageNavigator = ({
  image,
  name,
  onPrev,
  onNext
}) => (
  <div>
    <Button onClick={onPrev}>
      <Image src={icon_left_arrow} alt="Left arrow icon" />
    </Button>
    <Image src={image} alt={name} />
    <Button onClick={onNext}>
      <Image src={icon_right_arrow} alt="Right arrow icon" />
    </Button>
  </div>
)
