import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/Component 5.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#010317] text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-40 shadow-lg ease-in-out duration-300`}
      >
        <div className="flex justify-between items-center p-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
          />
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 text-lg">
          <li>
            <Link
              to="/principal"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/perfil"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Editar perfil
            </Link>
          </li>
          <li>
            <Link
              to="/agenda"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              to="/conversas"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Meus pacientes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Relatórios
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'} lg:ml-0`}
      >
        {/* Top header */}
        <header className="bg-[#010317] text-white fixed top-0 left-0 w-full z-30 shadow-md">
          <nav className="container mx-auto flex items-center justify-between p-4">
            {/* Menu Button for all screens */}
            <button
              onClick={toggleMenu}
              className={`flex items-center px-3 py-2 border border-white rounded text-white hover:text-gray-400 hover:border-gray-400 lg:hidden ${isMenuOpen ? 'hidden' : 'flex'}`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            {/* Logo */}
            {!isMenuOpen && (
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto"
              />
            )}
            {/* Open Button for large screens */}
            {!isMenuOpen && (
              <button
                onClick={toggleMenu}
                className="hidden lg:flex items-center px-3 py-2 border border-white rounded text-white hover:text-gray-400 hover:border-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            )}
            
          </nav>
        </header>

        {/* Page Content */}
        <div className="pt-16">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
}
