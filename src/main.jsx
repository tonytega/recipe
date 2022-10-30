import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {theme} from './theme'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
