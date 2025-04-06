import React from "react"
import { Link } from "react-router-dom"
import "./NavigateMenu.css"

export default function NavigateMenu() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">RCStorage</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/loginform1">Логин</Link>
          </li>
          <li>
            <Link to="/slider1">Слайдер</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
