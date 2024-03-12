
import './style/App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import CreateHikePage from './pages/CreateHikePage'
import RoutesPage from './pages/RoutesPage'
import CreateRoutePage from './pages/CreateRoutePage'
import RouteIdPage from './pages/RouteIdPage'
import JoinHikePage from "./pages/JoinHikePage";
import AboutPage from './pages/AboutPage'
import UserPage from './pages/UserPage'
import CityPage from './pages/City'
import Footer from './components/Footer'
import HikeIdPage from './pages/HikeIdPage'

import DayHikesPage from "./pages/DayHikesPage"

import IsPrivate from './components/RouteGuard'


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />

        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        
        <Route path='/routes' element={<RoutesPage />} />
        <Route path='/routes/create' element={<CreateRoutePage />} />
        <Route path='/routes/:routeId' element={<RouteIdPage />} />
          
       {/*  <Route path="/join-hike" element={<JoinHikePage />}/>
        <Route path='/hikes/create' element={<CreateHikePage />} /> */}
        <Route path='/hikes/:hikeId' element={<HikeIdPage />} /> 
        <Route path="/dashboard" element={<IsPrivate><DashboardPage /></IsPrivate>} />

        <Route path='/routes' element={<RoutesPage />} />
        <Route path='/routes/create' element={<IsPrivate> <CreateRoutePage /> </IsPrivate>} />
        <Route path='/routes/:routeId' element={<IsPrivate> <RouteIdPage /> </IsPrivate>} />

        <Route path="/day/:date" element={<IsPrivate> <DayHikesPage /></IsPrivate>} />
        <Route path='/user' element={<UserPage />} />
        <Route path="/city" element={<IsPrivate> <CityPage /> </IsPrivate>} />
        
        <Route path="/hikes/create" element={<IsPrivate> <CreateHikePage /> </IsPrivate>} />
        <Route path="/join-hike" element={<IsPrivate> <JoinHikePage /> </IsPrivate>} />
        <Route path='/hikes/:hikeId' element={ <IsPrivate> <HikeIdPage /> </IsPrivate>} /> 
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
