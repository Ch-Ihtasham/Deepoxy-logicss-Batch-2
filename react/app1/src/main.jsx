import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Fotter from './components/Fotter.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <div>
    <Navbar logo='D-Poxy' />
    <App name='ali' /> <br />
    {/* <App name='abubakar' /> <br /> */}
    {/* <App name='ahmed' /> <br /> */}
    {/* <App name='talha' /> */}

    <Fotter />
  </div>

  //  </StrictMode>, 
)
