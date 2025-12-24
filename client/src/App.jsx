import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TeamsSection from "./components/TeamsSection";
import ElectroSection from "./components/ElectroSection";
import TeamCarousel from "./components/TeamCarousel";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MeetTheTeam from "./components/MeetTheTeam";
import TeamsHero from "./components/TeamsHero";
import InitialSection from "./components/InitialSection";
// import Events from "./components/Events/Events"
import AboutUs from "./components/AboutUs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import DeptOfEEE from "./components/DeptOfEEE";

function App() {
  // const [array, setArray] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:5000/api");
  //   setArray(response.data.message);
  //   console.log(response.data.message);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);
  const ADMIN_SECRET_ID = import.meta.env.VITE_ADMIN_SECRET_ID; 
  const AdminRoute = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id !== ADMIN_SECRET_ID) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Not authorized</p>
      </div>
    );
  }

  return <AdminDashboard />;
};

  return (
    <BrowserRouter>
      <AnimatePresence mode="sync">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<AdminRoute />} />
          <Route path="/about/EEE" element={<DeptOfEEE />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/electro" element={<ElectroSection />} />
          <Route path="/carousel" element={<TeamCarousel />} />
          <Route path="/meet" element={<MeetTheTeam />} />
          <Route path="/foot" element={<Footer />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/hero" element={<TeamsHero />} />
          <Route path="/init" element={<InitialSection />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
