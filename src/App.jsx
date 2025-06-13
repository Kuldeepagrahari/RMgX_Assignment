// src/App.jsx
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import ToggleMode from './components/ToggleMode'
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <ToggleMode />
      <Header />
      <SearchBar />
      <Footer />
    </div>
  )
}
