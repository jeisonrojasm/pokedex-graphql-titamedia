import icon_height from '../../assets/icons/icon-height.svg'
import icon_weight from '../../assets/icons/icon-weight.svg'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'

import './PokemonAbout.css'

export const PokemonAbout = ({
  weight,
  height,
  moves,
  description,
  color
}) => (
  <>
    <Text className="pokemon-about__title" style={{ color }} as='h3'>About</Text>

    <div className="pokemon-about__attributes">
      <div className="pokemon-about__attribute">
        <div className="pokemon-about__attribute--info">
          <Image className="pokemon-about__attribute--img" src={icon_weight} alt="Weight icon" />
          <Text className="pokemon-about__attribute--data">{weight} kg</Text>
        </div>
        <Text className="pokemon-about__data-title">Weight</Text>
      </div>

      <div className="pokemon-about__attribute">
        <div className="pokemon-about__attribute--info">
          <Image className="pokemon-about__attribute--img" src={icon_height} alt="Height icon" />
          <Text className="pokemon-about__attribute--data">{height} m</Text>
        </div>
        <Text className="pokemon-about__data-title">Height</Text>
      </div>

      <div className="pokemon-about__attribute pokemon-about__attribute--moves">
        <Text className="pokemon-about__attribute--data">{moves.join(' - ')}</Text>
        <Text className="pokemon-about__data-title">Moves</Text>
      </div>
    </div>

    <Text className="pokemon-about__description" as='p'>{description}</Text>
  </>
)
