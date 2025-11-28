import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
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
