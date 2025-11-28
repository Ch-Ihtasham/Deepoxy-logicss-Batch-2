import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Outlet from './Layout.jsx'

// mehtod no 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/home',
//     element: <Home />
//   },
//   {
//     path: '/about',
//     element: <About />
//   },
//   {
//     path: '/blog',
//     element: <Blog />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }
// ])

// method no 2

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
