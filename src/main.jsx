import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Oferta from './Home/Oferta'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/oferta" element={<Oferta/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

