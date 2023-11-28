import './index.scss'
import React from 'react'
import { i18next } from './ts/i18next'
import ReactDOM from 'react-dom/client'
import App from './App';

i18next()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
