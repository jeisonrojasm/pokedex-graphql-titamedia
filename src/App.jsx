import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FavoritesProvider } from './context/FavoritesContext'
import { Home } from './pages/Home'
import { PokemonDetail } from './components/organisms/PokemonDetail'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
