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
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <img src="./logo.svg" alt="Logo" />
      <div>
        <Link to={'/'} className='ml-5 p-3 font-semibold rounded-lg hover:bg-blue-gray-50'>
          Home
        </Link>
        <Link to={'/leaflet'} className='ml-5 p-3 font-semibold rounded-lg hover:bg-blue-gray-50'>
          Show Map
        </Link>
        <Link to={'/safety-tips'} className='ml-5 p-3 font-semibold rounded-lg hover:bg-blue-gray-50'>
          Safety Tips
        </Link>
        <Link to={'/vlogs'} className='mx-5 p-3 font-semibold rounded-lg hover:bg-blue-gray-50'>
          Travel Vlogs
        </Link>
        {!isLoggedIn && (
          <Button onClick={handleSignInClick}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
