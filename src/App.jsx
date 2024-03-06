
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import './App.css'

function App() {

  return (
    <>
     <h1> Iron Hikers </h1>

     <Routes>
     <Route path='/login' element={<LogInPage/>} />
     <Route path='/signup' element={<SignUpPage/>} />
     </Routes>
    </>
  )
}

export default App
