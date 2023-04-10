import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import { NoteProvider } from './contexts/NoteContext'

import App from './App'
import AppWithContext from './AppWithContext'
import AppWithRoutes from './AppWithRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NoteProvider> */}
      <App />
    {/* </NoteProvider> */}
  </React.StrictMode>,
)
