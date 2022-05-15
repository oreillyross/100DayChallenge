import * as React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Content from "./Content";
import About from "./routes/About";
import Engage from "./routes/Engage";
import Projects from "./routes/Projects";


export default function App() {
  return (
    <BrowserRouter>
      {/* Nav bar section start */}
      <nav className="bg-red-500 relative container mx-auto p-6 m-2">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            {/* Logo */}
            <a href="/"><img src="/img/nature.svg" alt="" width="100px" height="100px" /></a>
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <Link to="/about" className="hover:text-slate-400">
              About Me
            </Link>
            <Link to="/projects" className="hover:text-slate-400">
              Projects
            </Link>
            <Link to="/learning" className="hover:text-slate-400">
              Learning
            </Link>
            <Link to="/engage" className="hover:text-slate-400">
              Engage
            </Link>
            <Link
              to="100days"
              className="hidden md:block p-2 px-3 pt-2 text-white bg-gray-800 rounded-full
                     baseline border-2
                   hover:border-gray-900 
                     hover:text-slate-900 
                     hover:bg-white"
            >
              #100Days
            </Link>
          </div>
        </div>
      </nav>
      {/* navbar section end */}
      {/* Hero section start */}
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/engage" element={<Engage/>}/>
      </Routes>
      
      {/* features section end */}
    </BrowserRouter>
  );
}
