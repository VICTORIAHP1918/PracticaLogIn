import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LogInPage from './LogInPage'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogInPage/>
  </StrictMode>,
)
