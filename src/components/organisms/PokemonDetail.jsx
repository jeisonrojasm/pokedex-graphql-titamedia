import { usePokemonDetail } from '../../hooks/usePokemonDetail'

export const POKEMON_COLOR_MAP = {
  black: '#1C1C1C',
  blue: '#3B82F6',
  brown: '#92400E',
  gray: '#6B7280',
  green: '#22C55E',
  pink: '#EC4899',
  purple: '#A855F7',
  red: '#EF4444',
  white: '#F9FAFB',
  yellow: '#FACC15',
}

export const PokemonDetail = ({ name }) => {
  const { pokemon, loading, error } = usePokemonDetail(name)

  if (loading) return <p>Cargando detalle...</p>
  if (error) return <p>Error</p>
  if (!pokemon) return null

  const sprite = pokemon.pokemon_v2_pokemonsprites[0].sprites
  const srcImg = sprite.front_default
  const types = pokemon.pokemon_v2_pokemontypes.map(
    t => t.pokemon_v2_type.name
  )
  const heightMeters = pokemon.height / 10
  const weightKg = pokemon.weight / 10
  const moves = pokemon.pokemon_v2_pokemonmoves.map(
    m => m.pokemon_v2_move.name
  )

  const stats = pokemon.pokemon_v2_pokemonstats.reduce(
    (acc, stat) => {
      acc[stat.pokemon_v2_stat.name] = stat.base_stat
      return acc
    },
    {}
  )

  const description =
    pokemon.pokemon_v2_pokemonspecy
      .pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text

  const colorName =
    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name

  const colorHex = POKEMON_COLOR_MAP[colorName] ?? '#E5E7EB'

  return (
    <div style={{ backgroundColor: colorHex }}>
      <div>
        <button>{`<-`}</button>
        <h2>{pokemon.name}</h2>
        <span>{`#${pokemon.id}`}</span>
      </div>

      <div>
        <button>{`<`}</button>
        <img src={srcImg} alt={pokemon.name} />
        <button>{`>`}</button>
      </div>

      <div style={{ backgroundColor: 'white' }}>
        <div>
          {
            types.map(type => (
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
              <span>{weightKg} kg</span>
            </div>
            <span>Weight</span>
          </div>
          <div>
            <div>
              <span>{heightMeters} m</span>
            </div>
            <span>Height</span>
          </div>
          <div>
            <span>
              {
                moves.join('-')
              }
            </span>
            <span>Moves</span>
          </div>
        </div>

        <p>{description}</p>

        <h3>Base Stats</h3>

        <div>
          {Object.entries(stats).map(([statName, statValue]) => (
            <div key={statName}>
              <div>
                <span>{statName}</span>
                <span>{statValue}</span>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${statValue}%`,
                      height: '100%',
                      backgroundColor: colorHex,
                      borderRadius: '4px',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
