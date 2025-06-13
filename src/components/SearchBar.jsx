// src/components/SearchBar.jsx
import '../style/searchbar.css'

export default function SearchBar() {
  return (
    <section className="search-container">
     
      <img
        src="https://www.google.com/logos/doodles/2025/indian-premier-league-2025-begins-6753651837110716-2x.png"
        alt="Google"
        className="google-logo"
      />
     
      <div className="search-box">
        <input type="text" placeholder="Search Google or type a URL" />
        <div className="icons">
          <span role="img" aria-label="Search">🔍</span>
          <span role="img" aria-label="Mic">🎤</span>
        </div>
      </div>
      <div className="buttons">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </section>
  )
}
