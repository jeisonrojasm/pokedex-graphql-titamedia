import { useFavorites } from '../../hooks/useFavorites'
import { usePokemonDetail } from '../../hooks/usePokemonDetail'
import { mapPokemonDetail } from '../../utils/mapPokemonDetail'

import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import { PokemonAbout } from '../molecules/PokemonAbout'
import { PokemonDetailHeader } from '../molecules/PokemonDetailHeader'
import { PokemonDetailImageNavigator } from '../molecules/PokemonDetailImageNavigator'
import { PokemonDetailTypes } from '../molecules/PokemonDetailTypes'
import { PokemonStats } from '../molecules/PokemonStats'

import icon_star_filled from '../../assets/icons/icon-star-filled.svg'
import icon_star from '../../assets/icons/icon-star.svg'

export const PokemonDetail = ({ name }) => {
  const { pokemon, loading, error } = usePokemonDetail(name)
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  if (loading) return <Text as='p'>Cargando detalle...</Text>
  if (error) return <Text as='p'>Error</Text>
  if (!pokemon) return null

  const data = mapPokemonDetail(pokemon)

  const isFavorite = favorites.some(
    (fav) => fav.name === pokemon.name
  )

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(pokemon.name)
    } else {
      addFavorite(pokemon)
    }
  }

  return (
    <div style={{ backgroundColor: data.color }}>
      <PokemonDetailHeader
        name={data.name}
        id={data.id}
        onBack={() => { }}
      />

      <PokemonDetailImageNavigator
        image={data.image}
        name={data.name}
        onPrev={() => { }}
        onNext={() => { }}
      />

      <div style={{ backgroundColor: 'white' }}>
        <Button onClick={handleToggleFavorite}>
          <Image
            src={isFavorite ? icon_star_filled : icon_star}
            alt="Favorite icon"
          />
        </Button>
        <PokemonDetailTypes types={data.types} />

        <PokemonAbout
          weight={data.weight}
          height={data.height}
          moves={data.moves}
          description={data.description}
        />

        <PokemonStats stats={data.stats} color={data.color} />
      </div>
    </div >
  )
}
