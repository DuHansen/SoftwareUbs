import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [selected, setSelected] = useState('/conversas'); // Default value

  const links = [
    { name: 'Conversas', path: '/conversas' },
    { name: 'Chamados', path: '/abertos' },
    { name: 'Favoritas', path: '/favoritas' },
  ];

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <footer className="bg-[#010317] text-white fixed bottom-0 w-full shadow-xl">
      <nav className="flex flex-wrap justify-around p-2 md:p-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-2 py-1 md:px-3 md:py-2 text-center rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg no-underline ${
              selected === link.path
                ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-2xl'
                : 'bg-orange-400 text-gray-800 hover:bg-orange-500'
            }`}
            onClick={() => setSelected(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
