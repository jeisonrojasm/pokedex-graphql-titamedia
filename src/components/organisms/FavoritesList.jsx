import icon_back_arrow from '../../assets/icons/icon-back-arrow.svg'
import { useFavorites } from '../../hooks/useFavorites'
import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import { PokemonCard } from '../molecules/PokemonCard'

import { useNavigate } from 'react-router-dom'
import { Warn } from '../molecules/Warn'
import './FavoritesList.css'

export const FavoritesList = () => {
  const { favorites, removeFavorite } = useFavorites()
  const navigate = useNavigate()

  return (
    <div className="favorites-list">
      <div className="favorites-list__header">
        <Button className="pokemon-detail-header__back-btn" onClick={() => navigate('../')}>
          <Image className="pokemon-detail-header__back-btn--image" src={icon_back_arrow} alt="Back arrow icon" />
        </Button>
        <Text className="favorites-list__title" as="h2">Favoritos</Text>
      </div>
      {favorites.length === 0 ? (
        <Warn text="No hay pokemones en la lista de favoritos. Ve al detalle de un Pokémon y añádelo como favorito por medio del ícono de la estrella." />
      ) : (
        <div className="pokemon-list__cards">
          {favorites.map((pokemon) => (
            <div className="favorites-list__card" key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
              <Button
                className="favorites-list__delete-btn"
                onClick={() => removeFavorite(pokemon.name)}
              >
                Quitar
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
