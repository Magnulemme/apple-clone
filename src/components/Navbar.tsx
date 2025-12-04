import { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#161617] text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1024px] mx-auto px-5">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Apple" className="w-6 h-6" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-5">
            <button className="hover:opacity-70 transition-opacity hidden md:block">
              <img src="/search.svg" alt="Search" className="w-5 h-5" />
            </button>
            <button className="hover:opacity-70 transition-opacity hidden md:block">
              <img src="/cart.svg" alt="Cart" className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'mt-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#161617] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-5 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-base hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-gray-700 flex items-center space-x-6">
            <button className="hover:opacity-70 transition-opacity">
              <img src="/search.svg" alt="Search" className="w-5 h-5" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <img src="/cart.svg" alt="Cart" className="w-5 h-5" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
