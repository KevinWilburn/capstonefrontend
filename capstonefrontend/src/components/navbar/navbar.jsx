import React from 'react'
import './navbar.css'

export default function NavBar() {
    return (
        <nav>
            <h3> Logo </h3>
            <ul className="navlinks">
                <li>Log Out</li>
                <li>Closet</li>
                <li>Profile</li>
            </ul>
        </nav>
            
    );
}
