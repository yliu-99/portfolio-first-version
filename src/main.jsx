import React, { StrictMode } from 'react' // Add React import
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Glocal Styles
import './reset.scss'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
