import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default function NavBar() {
    return (
        <nav>
            <img className="nav-logo"src={logo} alt="nav-logo" width="100" height="100" border-radius="50%"></img>
            <ul className="navlinks">
            
            <Link to='home'>
            <li>Home</li>
            </Link> 
            <Link to='closet'>
            <li>Closet</li>
            </Link> 
            {/* <Link to='profilepage'>
            <li>Profile</li>
            </Link>  */}
            <Link to='/'>
            <li>Log Out</li>
            </Link>
                
               
            </ul>
        </nav>
            
    );
}
