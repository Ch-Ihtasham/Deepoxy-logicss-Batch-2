import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from './components/Fotter'

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Fotter />
        </div>
    )
}
