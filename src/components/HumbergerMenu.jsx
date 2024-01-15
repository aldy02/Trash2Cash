import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative lg:hidden flex">
      <button className='space-y-1 group' onClick={toggleMenu}>
        <svg
          className={`h-6 w-6 ${menuOpen ? 'text-green-500' : 'text-black'}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h8m8 0h-8m-8 6h16"></path>
        </svg>
      </button>

      {menuOpen && (
        <div className='w-screen bg-white absolute top-0 right-0 duration-300 transform translate-y-0 group-focus:translate-y-full flex flex-col space-y-3 justify-end'>
          <div className='px-10 pt-6 relative ml-auto'>
            <button onClick={closeMenu}>
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <Link to='/' onClick={closeMenu}>
            <li className='flex justify-center w-full py-4 hover:bg-green-100'>Homepage</li>
          </Link>
          <Link to='/pickup' onClick={closeMenu}>
            <li className='flex justify-center w-full py-4 hover:bg-green-100'>Pickup</li>
          </Link>
          <Link to='/product' onClick={closeMenu}>
            <li className='flex justify-center w-full py-4 hover:bg-green-100'>Product</li>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
