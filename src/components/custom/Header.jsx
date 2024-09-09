import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

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
