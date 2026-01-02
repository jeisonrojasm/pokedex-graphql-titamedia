import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'

export const PokemonDetailHeader = ({ name, id, onBack }) => (
  <div>
    <Button onClick={onBack}>{'<-'}</Button>
    <Text as="h2">{name}</Text>
    <Text>{`#${id}`}</Text>
  </div>
)
