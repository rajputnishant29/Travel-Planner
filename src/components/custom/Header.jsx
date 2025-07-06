import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("users");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser) {
          setIsLoggedIn(true);
        }
      }
    } catch (err) {
      console.error("Error parsing user data from localStorage:", err);
    }
  }, []);

  const handleSignInClick = () => {
    navigate('/signup');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md rounded-lg text-[#8ad8c4] shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img className="h-10 w-10 rounded-full" src="./Ai_trip_logo.jpeg" alt="Logo" />
          <h2 className="font-bold text-lg md:text-xl text-[#8ad8c4]">
            AI Trip Planner
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/leaflet" label="Show Map" />
          <NavLink to="/safety-tips" label="Safety Tips" />
          <NavLink to="/weather" label="Check Weather" />
          <NavLink to="/vlogs" label="Travel Vlogs" />
        </nav>

        {/* Sign In Button */}
        {!isLoggedIn && (
          <Button
            onClick={handleSignInClick}
            className="bg-[#8ad8c4] hover:bg-[#6fb6a3] text-black font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}

// Reusable NavLink Component for Cleaner Code
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-[#227a6c] font-semibold hover:underline transition duration-300"
  >
    {label}
  </Link>
);

export default Header;

