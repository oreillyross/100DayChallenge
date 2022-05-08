import * as React from "react";

export default function App() {
  return (
    <>
      <nav className="bg-red-500 relative container mx-auto p-6 m-2">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            {/* Logo */}
            <img src="/img/nature.svg" alt="" width="100px" height="100px" />
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:text-slate-400">
              About Me
            </a>
            <a href="#" className="hover:text-slate-400">
              Projects
            </a>
            <a href="#" className="hover:text-slate-400">
              Learning
            </a>
            <a href="#" className="hover:text-slate-400">
              Engage
            </a>
            <a
          href="#"
          className="hidden md:block p-2 px-3 pt-2 text-white bg-gray-800 rounded-full
                     baseline border-2
                   hover:border-gray-900 
                     hover:text-slate-900 
                     hover:bg-white"
        >
          #100Days
        </a>
          </div>
        </div>
        
      </nav>
    </>
  );
}
