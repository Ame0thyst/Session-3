


import React from "react";

const Project = ({ darkMode }) => {
  const darkModeClass = darkMode ? "project-dark" : "project-light";

  return (
   <div className="bg-gradient-to-r from-slate-400 to-slate-50">
    <h1 className="text-slate-900 text-center">Project Showcase</h1>
    <div className={`flex flex-wrap justify-center min-h-screen flex-row   ${darkModeClass}`}>
      {/* Project 1 */}
      
      
      <div className={`w-1/3 h-[350px] bg-black m-6 relative transition-all duration-200 hover:scale-105`}>
        <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-dark-header" : "bg-light-header"} shadow-lg transition-all duration-200`}></div>
        <img
            src="/assets/gambar/showcase1.jpeg"
            alt="Project 1"
            className="w-full h-full object-cover rounded-md opacity-70"
          />

        <div className={`absolute right-[-15px] top-[15px] w-[300px] h-[25%] bg-gray-100 flex items-center shadow-lg transition-all duration-300`}>
          <p className={`pl-5 text-lg font-light ${darkMode ? "text-dark-description" : "text-light-description"}`}>SkySched - WebApp</p>
        </div>
        <div className={`absolute right-[-15px] top-[85px] w-[250px] h-[10%] bg-green-500 flex items-center shadow-lg transition-all duration-300 opacity-100`}>
          <p className={`pl-5 text-white text-sm ${darkMode ? "text-dark-description" : "text-light-description"}`}>HTML | CSS | Javascript</p>
        </div>
        
      </div>

          {/* Project 2 */}
          <div className={`w-1/3 h-[350px] bg-black m-6 relative transition-all duration-200 hover:scale-105`}>
        <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-dark-header" : "bg-light-header"} shadow-lg transition-all duration-200`}></div>
        <img
            src="/assets/gambar/showcase2.jpeg"
            alt="Project 1"
            className="w-full h-full object-cover rounded-md opacity-70"
          />
        <div className={`absolute right-[-15px] top-[15px] w-[300px] h-[25%] bg-gray-100 flex items-center shadow-lg transition-all duration-300`}>
          <p className={`pl-5 text-lg font-light ${darkMode ? "text-dark-description" : "text-light-description"}`}>SkySched - WebApp</p>
        </div>
        <div className={`absolute right-[-15px] top-[85px] w-[250px] h-[10%] bg-green-500 flex items-center shadow-lg transition-all duration-300 opacity-100`}>
          <p className={`pl-5 text-white text-sm ${darkMode ? "text-dark-description" : "text-light-description"}`}>HTML | CSS | Javascript</p>
        </div>
        
      </div>
     
    </div>
    </div>
  );
};

export default Project;
