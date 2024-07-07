import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <i className="fa-solid fa-video"></i>
        <Link className="nav-link" to="/">MOVIES</Link>
        <Link className="nav-link" to="/watchlist">WATCHLIST</Link>
    </nav>
  )
}

export default Navbar