export const PokemonAbout = ({
  weight,
  height,
  moves,
  description
}) => (
  <>
    <h3>About</h3>

    <div>
      <div>
        <span>{weight} kg</span>
        <span>Weight</span>
      </div>

      <div>
        <span>{height} m</span>
        <span>Height</span>
      </div>

      <div>
        <span>{moves.join('-')}</span>
        <span>Moves</span>
      </div>
    </div>

    <p>{description}</p>
  </>
)
