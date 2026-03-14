import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './css/index.css'
import './css/mobile.css'
import './css/largeScreen.css'

const basePath = '/greatfortheplanet'
const redirectPath = sessionStorage.getItem('redirectPath')

if (redirectPath && redirectPath.startsWith(basePath)) {
  const route = redirectPath.slice(basePath.length) || '/'
  sessionStorage.removeItem('redirectPath')
  window.history.replaceState(null, '', `${basePath}/#${route}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)