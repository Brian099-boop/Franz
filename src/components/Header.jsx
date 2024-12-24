import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black py-6 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Branding or Acronym Logo */}
        <div className="text-4xl font-extrabold ml-5 text-blue-500">
          <span className="text-green-500">AAC</span>
        </div>

        {/* Navigation Links Centered */}
        <div className="flex space-x-9 justify-center w-full">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/feedback" className="hover:text-gray-600">Feedback</Link> {/* Changed from Adopt to Feedback */}
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
