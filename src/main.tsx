import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LogInPage from './LogInPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogInPage/>
  </StrictMode>,
)
