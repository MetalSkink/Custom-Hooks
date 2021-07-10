import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">useContext</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <li><NavLink exact activeClassName="active" to="/" className="nav-item  nav-link">Home</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Login</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/about" className="nav-item nav-link">About</NavLink></li>
            </div>
          </div>
        </div>
      </nav>
    )
}
