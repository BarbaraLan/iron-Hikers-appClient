
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

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/hikes/create' element={<CreateHikePage />} />
        <Route path='/routes' element={<RoutesPage />} />
        <Route path='/routes/create' element={<CreateRoutePage />} />
        <Route path='/routes/:routeId' element={<RouteIdPage />} />
        <Route path="/join-hike" element={<JoinHikePage />}/>
        <Route path='/hikes/:hikeId' element={<HikeIdPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/city' element={<CityPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
