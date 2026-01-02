import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import icon_weight from '../../assets/icons/icon-weight.svg'
import icon_height from '../../assets/icons/icon-height.svg'

export const PokemonAbout = ({
  weight,
  height,
  moves,
  description
}) => (
  <>
    <Text as='h3'>About</Text>

    <div>
      <div>
        <div>
          <Image src={icon_weight} alt="Weight icon" />
          <Text>{weight} kg</Text>
        </div>
        <Text>Weight</Text>
      </div>

      <div>
        <div>
          <Image src={icon_height} alt="Height icon" />
          <Text>{height} m</Text>
        </div>
        <Text>Height</Text>
      </div>

      <div>
        <Text>{moves.join('-')}</Text>
        <Text>Moves</Text>
      </div>
    </div>

    <Text as='p'>{description}</Text>
  </>
)
