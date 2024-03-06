
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import UserPage from './Pages/UserPage'
import './App.css'

function App() {

  return (
    <>
     <h1> Iron Hikers </h1>

     <Routes>
     <Route path='/login' element={<LogInPage/>} />
     <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/user' element={<UserPage />} />
     </Routes>
    </>
  )
}

export default App
