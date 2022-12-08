import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
