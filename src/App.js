import { Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css';

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Work from "./pages/Work";

// components
import Navbar from "./Components/NavBar";

function App() {
  return (
    <>
     
    
      <header>
        <img className="pic" src={require("./image/pic.jpg")} alt="Profile" />
        <Navbar />
      </header>
    
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </>
    
  );
}
export default App;
