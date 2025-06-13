// src/App.jsx
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import DarkModeToggle from './components/ToggleMode'

export default function App() {
  return (
    <div className="app">
      <DarkModeToggle />
      <Header />
      <SearchBar />
      <Footer />
    </div>
  )
}
