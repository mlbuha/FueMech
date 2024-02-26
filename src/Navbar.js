import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
export default function Navbar() {
    return (
        <>
            <div className='navbar-fixed-top'>
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className="container">
                        <Link className="navbar-brand logo" to="/"><img src={logo} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">HOME</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/fuel">FUEL</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mechanic">MECHANIC</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">CONTACT US</Link>
                                </li>
                            </ul>
                            <button className='loginButton'>Login</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
