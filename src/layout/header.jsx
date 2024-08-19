import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/Component 5.png";

const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" />
    <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative flex">
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
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/perfil"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Editar perfil
            </Link>
          </li>
          <li>
            <Link
              to="/agenda"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              to="/conversas"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Meus pacientes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Relatórios
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}
      >
        {/* Top header */}
        <header className="bg-[#010317] text-white fixed top-0 left-0 w-full z-30 shadow-md">
          <nav className="container mx-auto flex items-center justify-between p-4">
            {/* Menu Button for all screens */}
            <button
              onClick={toggleMenu}
              className={`flex items-center px-3 py-2 text-white lg:hidden ${isMenuOpen ? 'hidden' : 'flex'}`}
            >
              <HamburgerIcon />
            </button>
            {/* Logo */}
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto"
            />
            {/* Open Button for large screens */}
            <button
              onClick={toggleMenu}
              className="hidden lg:flex items-center px-3 py-2 text-white"
            >
              <HamburgerIcon />
            </button>
          </nav>
        </header>
      </div>
    </div>
  );
}
