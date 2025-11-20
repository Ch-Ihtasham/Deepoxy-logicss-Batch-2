import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
    return (
        <div>
            <div>{props.logo}</div>
            <nav className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}



