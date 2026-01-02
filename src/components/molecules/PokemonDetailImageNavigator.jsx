import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'

export const PokemonDetailImageNavigator = ({
  image,
  name,
  onPrev,
  onNext
}) => (
  <div>
    <Button onClick={onPrev}>{'<'}</Button>
    <Image src={image} alt={name} />
    <Button onClick={onNext}>{'>'}</Button>
  </div>
)
