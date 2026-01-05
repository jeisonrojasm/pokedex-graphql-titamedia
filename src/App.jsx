import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FavoritesProvider } from './context/FavoritesContext'
import { Home } from './pages/Home'
import { PokemonDetail } from './components/organisms/PokemonDetail'
import { FavoritesList } from './components/organisms/FavoritesList'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<PokemonDetail />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
