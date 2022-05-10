import * as React from "react";

export default function App() {
  return (
    <>
      {/* Nav bar section start */}
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
      {/* navbar section end */}
      {/* Hero section start */}
      <section id="hero">
        <div
          className="container flex flex-col-reverse 
                          md:flex-row 
                          items-center px-6 mx-auto 
                          mt-10 space-y-0 md:space-y-0"
        >
          <div className="flex flex-col  mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold  md:textleft md:text-5xl">
              Hi, 👋 I am Ross, your environmentally friendly developer
            </h1>
            <div>
              Full stack software engineer an expert in coding in Typescript,
              Javascript, and using React, NextJS, GraphQL, Serverless, HTML and
              CSS
            </div>
          </div>
          <img src="/img/freelancer.svg" alt="" />
        </div>
      </section>
      {/* Hero section end */}
    </>
  );
}
