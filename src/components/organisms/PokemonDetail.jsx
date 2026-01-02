import { usePokemonDetail } from '../../hooks/usePokemonDetail'
import { mapPokemonDetail } from '../../utils/mapPokemonDetail'
import { PokemonStats } from '../molecules/PokemonStats'

export const PokemonDetail = ({ name }) => {
  const { pokemon, loading, error } = usePokemonDetail(name)

  if (loading) return <p>Cargando detalle...</p>
  if (error) return <p>Error</p>
  if (!pokemon) return null

  const data = mapPokemonDetail(pokemon)

  return (
    <div style={{ backgroundColor: data.color }}>
      <div>
        <button>{`<-`}</button>
        <h2>{data.name}</h2>
        <span>{`#${data.id}`}</span>
      </div>

      <div>
        <button>{`<`}</button>
        <img src={data.image} alt={data.name} />
        <button>{`>`}</button>
      </div>

      <div style={{ backgroundColor: 'white' }}>
        <div>
          {
            data.types.map(type => (
              <span
                key={type}
              >
                {type}
              </span>
            ))
          }
        </div>

        <h3>About</h3>

        <div>
          <div>
            <div>
              <span>{data.weight} kg</span>
            </div>
            <span>Weight</span>
          </div>
          <div>
            <div>
              <span>{data.height} m</span>
            </div>
            <span>Height</span>
          </div>
          <div>
            <span>
              {
                data.moves.join('-')
              }
            </span>
            <span>Moves</span>
          </div>
        </div>

        <p>{data.description}</p>

        <PokemonStats stats={data.stats} color={data.color} />
      </div>
    </div >
  )
}
