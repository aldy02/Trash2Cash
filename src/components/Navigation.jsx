import React, { useState } from 'react';
import Logo from '../assets/Trash2CashLogo.png';
import ProfiileIcon from '../assets/ProfileIcon.svg';
import ArrowIcon from '../assets/ArrowIcon.svg';
import CartIcon from '../assets/CartIcon.svg';
import NotificationIcon from '../assets/NotificationIcon.svg';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HumbergerMenu';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../config/firebase';


const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const auth = getAuth(app);


  const isAuthRoute = () => {
    return location.pathname === '/sign-in' || location.pathname === '/sign-up';
  };

  if (isAuthRoute()) {
    return null;
  }

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/sign-in');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="navbar flex flex-row justify-between px-6 lg:px-8 py-2 border-b-2 border[#B0BEC5]">
      <div className="flex flex-row items-center">
        <Link to="/">
          <div className="logo-container">
            <img src={Logo} alt="Trash2Cash Logo" className="w-32 lg:w-44" />
          </div>
        </Link>
        <span className="hidden lg:block lg:border-l-[3px] lg:h-8 lg:border-[#DEDEDE] lg:ml-5 lg:mr-6"></span>
        <div className="text-[#455A64] items-center hidden lg:flex lg:flex-row lg:font-medium lg:text-xl">
          <Link to="/">
            <p className="hover:text-black">Homepage</p>
          </Link>
          <Link to="/pickup">
            <p className="mx-4 hover:text-black">Trash Pickup</p>
          </Link>
          <Link to="/product">
            <p className="hover:text-black">Product</p>
          </Link>
        </div>
      </div>
      <div className="profile flex flex-row items-center">
        <img
          className="w-5 lg:w-7"
          src={CartIcon}
          alt="Shopping Cart Icon"
        />
        <img
          src={NotificationIcon}
          alt="Notification Icon"
          className="w-5 ml-3 lg:w-7 lg:ml-5"
        />
        <span className="border-l-2 border-[#DEDEDE] h-6 mx-3 lg:mx-5 lg:border-l-[3px] lg:h-8"></span>
        <div className="relative group">
          <img
            className="w-6 lg:w-8 cursor-pointer"
            src={ProfiileIcon}
            alt="Profile Icon"
            onClick={handleProfileClick}
          />
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
              <button
                className="block px-4 w-24 bg-red-500 text-white font-semibold py-2 text-sm hover:bg-red-700 text-left"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
        <img
          src={ArrowIcon}
          alt="Arrow Icon"
          className="ml-1 mr-2 w-4 lg:ml-2 lg:w-6"
        />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navigation;
