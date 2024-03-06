
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import CreateHikePage from './Pages/CreateHikePage'
import './App.css'

function App() {

  return (
    <>
     <h1> Iron Hikers </h1>

     <Routes>
     <Route path='/login' element={<LogInPage/>} />
     <Route path='/signup' element={<SignUpPage/>} />
     <Route path='/create-hike' element={<CreateHikePage />} />
     </Routes>
    </>
  )
}

export default App
