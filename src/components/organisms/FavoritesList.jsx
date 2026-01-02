import { useFavorites } from '../../hooks/useFavorites'
import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'
import { PokemonCard } from '../molecules/PokemonCard'

export const FavoritesList = () => {
  const { favorites, removeFavorite } = useFavorites()

  return (
    <div>
      <Text as="h2">Favoritos</Text>
      {
        favorites.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
            />
            <Button onClick={() => removeFavorite(pokemon.name)}>
              Quitar
            </Button>
          </div>
        ))
      }
    </div>
  )
}
