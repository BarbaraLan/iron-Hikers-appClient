import "./style/App.css";
import { Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import DashboardPage from "./pages/DashboardPage";

import CreateHikePage from "./pages/CreateHikePage";
import JoinHikePage from "./pages/JoinHikePage";

import RoutesPage from "./pages/RoutesPage";
import CreateRoutePage from "./pages/CreateRoutePage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/About" element={<AboutPage />} />

        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/join-hike" element={<JoinHikePage />}/>
        <Route path="/create-hike" element={<CreateHikePage />} />

        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/routes/:create" element={<CreateRoutePage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
