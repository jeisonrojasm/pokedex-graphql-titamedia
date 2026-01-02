export const PokemonCard = ({ pokemon, onSelect }) => {
  const srcImg = pokemon.pokemon_v2_pokemonsprites[0]?.sprites?.other?.home?.front_default

  return (
    <div onClick={() => onSelect(pokemon.name)}>
      <span>{pokemon.id}</span>
      <h3>{pokemon.name}</h3>
      <img src={srcImg} alt={`pokemon ${pokemon.name}`} />
    </div>
  )
}
