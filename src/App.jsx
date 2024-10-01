import { useState } from 'react'
import {
  Routes, Route
} from "react-router-dom";

import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Work from "./pages/Work";
import NavBar from "./Components/NavBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <header>
        <img className="pic" src="/pic.jpg" alt="Profile" />
        <NavBar />
      </header>
    
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App
