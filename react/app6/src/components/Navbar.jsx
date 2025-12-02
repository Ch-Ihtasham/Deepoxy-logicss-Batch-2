import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className='bg-[#1a1a1a] p-10'>
                <ul className='flex justify-between '>
                    <Link to=''> <li className='text-red-500 cursor-pointer'>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/blog'><li>Blog</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    <Link to='/github'><li>Github Api</li></Link>
                </ul>
            </nav>
        </div>
    )
}
