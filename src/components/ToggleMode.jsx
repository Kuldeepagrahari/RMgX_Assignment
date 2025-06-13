// src/components/DarkModeToggle.jsx
import { useEffect, useState } from 'react'
import '../style/togglemode.css'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark((prev) => !prev)}
        />
        <span className="slider"></span>
      </label>
    </div>
  )
}
