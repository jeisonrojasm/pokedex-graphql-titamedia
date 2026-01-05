import { useFavorites } from '../../hooks/useFavorites'
import { usePokemonDetail } from '../../hooks/usePokemonDetail'
import { mapPokemonDetail } from '../../utils/mapPokemonDetail'

import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { PokemonAbout } from '../molecules/PokemonAbout'
import { PokemonDetailHeader } from '../molecules/PokemonDetailHeader'
import { PokemonDetailImageNavigator } from '../molecules/PokemonDetailImageNavigator'
import { PokemonDetailTypes } from '../molecules/PokemonDetailTypes'
import { PokemonStats } from '../molecules/PokemonStats'

import icon_star_filled from '../../assets/icons/icon-star-filled.svg'
import icon_star from '../../assets/icons/icon-star.svg'
import { Warn } from '../molecules/Warn'
import { useNavigate, useParams } from 'react-router-dom'

import './PokemonDetail.css'
import { useEffect, useState } from 'react'

export const PokemonDetail = () => {
  const { name } = useParams()
  const navigate = useNavigate()

  const { pokemon, loading, error } = usePokemonDetail(name)
  const { favorites, addFavorite, removeFavorite, totalPokemons } = useFavorites()

  const [ids, setIds] = useState({
    prevId: null,
    nextId: null,
  })

  useEffect(() => {
    if (!pokemon || totalPokemons.length === 0) return

    const currentIndex = totalPokemons.findIndex(p => p.id === pokemon.id)

    const prevId =
      currentIndex === 0
        ? totalPokemons[totalPokemons.length - 1]
        : totalPokemons[currentIndex - 1]

    const nextId =
      currentIndex === totalPokemons.length - 1
        ? totalPokemons[0]
        : totalPokemons[currentIndex + 1]

    setIds({
      prevId,
      nextId
    })
  }, [pokemon])

  if (loading) return <Warn text='Cargando detalle...' />
  if (error) return <Warn text='Error al cargar detalle' />
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
    <div className="pokemon-detail" style={{ backgroundColor: data.color }}>
      <PokemonDetailHeader
        name={data.name}
        id={data.id}
        onBack={() => navigate('../')}
      />

      <PokemonDetailImageNavigator
        image={data.image}
        name={data.name}
        onPrev={() => navigate(`/${ids.prevId.name}`)}
        onNext={() => navigate(`/${ids.nextId.name}`)}
      />

      <div className="pokemon-detail__info">
        <Button className="pokemon-detail__fav-btn" onClick={handleToggleFavorite}>
          <Image
            className="pokemon-detail__fav-btn-icon"
            src={isFavorite ? icon_star_filled : icon_star}
            alt="Favorite icon"
          />
        </Button>
        <PokemonDetailTypes className="pokemon-detail__types" style={{ backgroundColor: data.color }} types={data.types} />

        <PokemonAbout
          weight={data.weight}
          height={data.height}
          moves={data.moves}
          description={data.description}
          color={data.color}
        />

        <PokemonStats stats={data.stats} color={data.color} />
      </div>
    </div >
  )
}
