import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LogInPage from './LogInPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage from './MainPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogInPage/>
  </StrictMode>,
)
