import './index.scss'
import React from 'react'
import { i18next } from './ts/i18next'
import ReactDOM from 'react-dom/client'
import { useTranslation } from 'react-i18next'
// import App from './App';

i18next()
function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome_to_React')}</h2>;
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
