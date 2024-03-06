import { useState } from 'react'
import './style/App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import DashboardPage  from './pages/DashboardPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/About' element={<AboutPage />} />

      </Routes>
      
        <Footer/>
    </>
  )
}

export default App;
