import React, { useState } from 'react';
// You will need to install react-icons: npm install react-icons
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Custom gradient based on original CSS: linear-gradient(90deg, #74D7BB, #53C8B6, #35A99C)
  const headerGradientStyle = {
    backgroundImage: 'linear-gradient(90deg, #74D7BB, #53C8B6, #35A99C)',
  };

  // Gradient for the mobile dropdown menu (180deg)
  const menuGradientStyle = {
    backgroundImage: 'linear-gradient(180deg, #74D7BB, #53C8B6, #35A99C)',
  };

  return (
    <header
      className="fixed top-0 w-full z-50 shadow-lg"
      style={headerGradientStyle}
    >
      {/* Navbar: flex, space-between, responsive padding */}
      <nav className="flex items-center justify-between w-full h-[75px] px-8 sm:px-12 lg:px-20">
        {/* Logo */}
        <div className="logo">
          <h2 className="text-white text-2xl font-bold font-poppins">
            Selahadin
          </h2>
        </div>

        {/* Hamburger Icon (Visible only on small screens) */}
        <div
          id="hamburger"
          className="cursor-pointer text-white text-3xl lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // Show cross icon when menu is open
            <FaTimes className="cross-icon" />
          ) : (
            // Show bars icon when menu is closed
            <FaBars className="hamburger-icon" />
          )}
        </div>

        {/* Menu List */}
        <div
          className={`
            menu lg:flex lg:relative lg:top-auto lg:p-0 lg:bg-transparent lg:transition-none
            ${isMenuOpen ? 'block' : 'hidden'}
            absolute right-0 top-[75px] w-full sm:w-auto p-8 
            transition-all duration-250 z-40
          `}
          // Apply mobile dropdown gradient only when menu is open
          style={isMenuOpen ? menuGradientStyle : {}}
        >
          <ul className="flex flex-col lg:flex-row list-none m-0 p-0 space-y-4 lg:space-y-0 lg:space-x-8">
            {['Home', 'About', 'Projects', 'Contact Me'].map((item, index) => (
              <li key={index} className="menu-list-items">
                <a
                  className="text-white text-lg font-poppins hover:border-b-2 hover:border-white border-b-2 border-transparent transition-all duration-250 pb-1"
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
