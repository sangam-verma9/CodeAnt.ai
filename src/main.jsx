import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Signin from './auth/Signin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signin" element={<Signin />} />

  </Routes>
  </BrowserRouter>
)
