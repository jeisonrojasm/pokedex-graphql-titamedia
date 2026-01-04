import { POKEMON_COLOR_MAP } from './pokemonColors'

export const mapPokemonDetail = (pokemon) => {
  const sprite = pokemon.pokemon_v2_pokemonsprites[0]?.sprites
  const types = pokemon.pokemon_v2_pokemontypes.map(
    t => t.pokemon_v2_type.name
  )

  const STAT_NAME_MAP = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  }

  const stats = pokemon.pokemon_v2_pokemonstats.reduce((acc, stat) => {
    const originalName = stat.pokemon_v2_stat.name
    const mappedName = STAT_NAME_MAP[originalName] || originalName

    acc[mappedName] = stat.base_stat
    return acc
  }, {})

  const colorName =
    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name

  return {
    id: pokemon.id,
    name: pokemon.name,
    image: sprite?.other?.home?.front_default,
    types,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    moves: pokemon.pokemon_v2_pokemonmoves.map(
      m => m.pokemon_v2_move.name
    ),
    description:
      pokemon.pokemon_v2_pokemonspecy
        .pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text,
    stats,
    color: POKEMON_COLOR_MAP[colorName] ?? '#e0e0e0ff',
  }
}
