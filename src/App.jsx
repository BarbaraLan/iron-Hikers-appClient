import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import CreateHikePage from './Pages/CreateHikePage'
import './App.css'
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
        <Route path='/login' element={<LogInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
     <Route path='/create-hike' element={<CreateHikePage />} />
   
      </Routes>
      
        <Footer/>

    </>
  )
}

export default App;
