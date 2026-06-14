import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import CartStore from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={CartStore}><App/></Provider>
  </StrictMode>,
)
