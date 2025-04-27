import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/styles/app.css'

// Add this to disable findDOMNode warnings
import { config } from 'react-transition-group'
config.disabled = true

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
