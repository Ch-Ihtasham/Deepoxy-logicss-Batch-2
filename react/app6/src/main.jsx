import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Blog from './pages/Blog.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Github from './pages/Github.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='github' element={<Github />}
        loader={async () => {
          try {
            const response = await fetch("https://api.github.com/users/ch-ihtasham");

            if (!response.ok) {
              throw new Error("Failed to fetch GitHub data");
            }

            const data = await response.json();
            return data; // IMPORTANT: must return data
          } catch (error) {
            console.error("Fetch Error:", error);
            return null; // or handle with redirect/throw
          }
        }}
      />
      < Route path='about' element={< About />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
