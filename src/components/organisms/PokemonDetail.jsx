import { usePokemonDetail } from '../../hooks/usePokemonDetail'
import { mapPokemonDetail } from '../../utils/mapPokemonDetail'

import { PokemonAbout } from '../molecules/PokemonAbout'
import { PokemonDetailHeader } from '../molecules/PokemonDetailHeader'
import { PokemonDetailImageNavigator } from '../molecules/PokemonDetailImageNavigator'
import { PokemonDetailTypes } from '../molecules/PokemonDetailTypes'
import { PokemonStats } from '../molecules/PokemonStats'

export const PokemonDetail = ({ name }) => {
  const { pokemon, loading, error } = usePokemonDetail(name)

  if (loading) return <p>Cargando detalle...</p>
  if (error) return <p>Error</p>
  if (!pokemon) return null

  const data = mapPokemonDetail(pokemon)

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
