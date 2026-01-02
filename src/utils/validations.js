export const validatePokemonName = (name) => {
  const regex = /^[a-zA-Z]+$/

  if (!name || name.length < 3) {
    return 'El nombre debe tener al menos 3 caracteres'
  }

  if (!regex.test(name)) {
    return 'El nombre no debe contener caracteres especiales'
  }

  return null
}
