import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <h3> Logo </h3>
            <ul className="navlinks">
            <Link to='/home'>
            <li>Log Out</li>
            </Link>
            <Link to='closet'>
            <li>Closet</li>
            </Link> 
            <Link to='profilepage'>
            <li>Profile</li>
            </Link> 
                
               
            </ul>
        </nav>
            
    );
}
