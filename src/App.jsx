import './App.css'
import { FavoritesProvider } from './context/FavoritesContext'
import { Home } from './pages/Home'

function App() {
  return (
    <FavoritesProvider>
      <Home />
    </FavoritesProvider>
  )
}

export default App
