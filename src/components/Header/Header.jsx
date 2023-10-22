import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation()

  useEffect(()=>{setIsOpen(false)},[location])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cyan-950 p-5 text-xl font-serif ">
      <div className="container mx-auto flex items-center md:justify-center justify-end">
        <div className="hidden md:flex space-x-8 ">
          <Link to="/" className="text-white hover:text-red-500 hover:scale-105">Home</Link>
          <Link to="/Projects" className="text-white hover:text-red-500 hover:scale-105">Projects</Link>
          <Link to="/Career" className="text-white hover:text-red-500 hover:scale-105">Career-profile</Link>
          <Link to="/contact" className="text-white hover:text-red-500 hover:scale-105">Contact</Link>
        </div>
        <div className="md:hidden flex items-center ">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none hover:bg-slate-600 hover:rounded-full"
          >
            <svg
              xmlns=""
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          
          <Link to="/" className="block py-2 px-2 text-white hover:bg-slate-200 hover:text-black hover:scale-105">Home</Link>
          <Link to="/Projects" className="block py-2 px-2 text-white hover:bg-slate-200 hover:text-black hover:scale-105">Projects</Link>
          <Link to="/Career" className="block py-2 px-2 text-white hover:bg-slate-200 hover:text-black hover:scale-105">Career-profile</Link>
          <Link to="/Contact" className="block py-2 px-2 text-white hover:bg-slate-200 hover:text-black hover:scale-105">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
