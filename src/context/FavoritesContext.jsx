import { createContext, useEffect, useState } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)
  const [totalPokemons, setTotalPokemons] = useState(0)


  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
    setLoading(false)
    setError(false)
  }, [])

  const addFavorite = (pokemon) => {
    if (favorites.some((p) => p.name === pokemon.name)) return

    const updated = [...favorites, pokemon]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const removeFavorite = (name) => {
    const updated = favorites.filter((p) => p.name !== name)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, loading, error, totalPokemons, setTotalPokemons }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}