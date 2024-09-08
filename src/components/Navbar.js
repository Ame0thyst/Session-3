import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <nav className=" p-4 flex justify-between items-center shadow-2xl  bg-gradient-to-r from-slate-400 to-slate-50 font-mono text-lg">
      <ul className="flex space-x-6">
        <li className="relative group">
          <Link 
            to="/" 
            className="text-slate-600 hover:text-white transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-cyan-500 before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full"
          >
            Home
          </Link>
        </li>
        <li className="relative group">
          <Link 
            to="/about" 
            className="text-slate-600 hover:text-white transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-cyan-500 before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full"
          >
            About
          </Link>
        </li>
        {isLoggedIn && (
          <li className="relative group">
            <Link 
              to="/dashboard" 
              className="text-green-600 hover:text-white transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-cyan-500 before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full"
            >
              Dashboard
            </Link>
          </li>
        )}
        <li className="relative group">
          <Link 
            to="/myteam" 
            className="text-slate-600 hover:text-white transition duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-cyan-500 before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full"
          >
            My Team
          </Link>
        </li>
      </ul>
      <div>
        {!isLoggedIn ? (
         <button
         onClick={onLogin}
         className="text-gray-300 bg-gray-700 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:invert"
       >
         Login
       </button>
     ) : (
       <button
         onClick={onLogout}
         className="text-gray-300 bg-gray-700 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:invert"
       >
         Logout
       </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
