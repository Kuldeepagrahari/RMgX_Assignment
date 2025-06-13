// src/components/Header.jsx
import '../style/header.css'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#"><img src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" alt="Apps" className="avatar" /></a></li>
        </ul>
      </nav>
    </header>
  )
}
