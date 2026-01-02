import { capitalize } from '../../utils/capitalize'
import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import icon_back_arrow from '../../assets/icons/icon-back-arrow.svg'

export const PokemonDetailHeader = ({ name, id, onBack }) => (
  <div>
    <Button onClick={onBack}>
      <Image src={icon_back_arrow} alt="Back arrow icon" />
    </Button>
    <Text as="h2">{capitalize(name)}</Text>
    <Text>{`#${id}`}</Text>
  </div>
)
