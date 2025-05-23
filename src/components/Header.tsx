import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/images/image.png" 
                alt="Feinschmecker Deli Meats" 
                className="h-14 md:h-16"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary font-medium">Home</Link>
            <Link to="/beef" className="text-gray-800 hover:text-primary font-medium">Beef</Link>
            <Link to="/pork" className="text-gray-800 hover:text-primary font-medium">Pork</Link>
            <Link to="/poultry" className="text-gray-800 hover:text-primary font-medium">Poultry</Link>
            <Link to="/special-cuts" className="text-gray-800 hover:text-primary font-medium">Special Cuts</Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary font-medium">Contact</Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4 py-4">
            <Link to="/" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/beef" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>Beef</Link>
            <Link to="/pork" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>Pork</Link>
            <Link to="/poultry" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>Poultry</Link>
            <Link to="/special-cuts" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>Special Cuts</Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary font-medium" onClick={toggleMenu}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
