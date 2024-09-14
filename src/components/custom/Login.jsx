import { signInWithEmailAndPassword } from 'firebase/auth';
import { onSnapshot, query, collection, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../../service/firebaseConfig';
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";


function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("users");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser); // Parse only if the data is not null
        if (parsedUser) {
          setIsLoggedIn(true); // If user data is found and parsed successfully, consider the user logged in
        }
      }
    } catch (err) {
      console.error("Error parsing user data from localStorage:", err);
      // Handle error (e.g., corrupted data)
      localStorage.removeItem("users"); // Optionally, remove the corrupted data
    }
  }, []);

  const userLoginFunction = async () => {
    try {
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      
      const q = query(
        collection(db, "user"),
        where('uid', '==', users?.user?.uid)
      );

      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let user;
        QuerySnapshot.forEach((doc) => user = doc.data());
        localStorage.setItem("users", JSON.stringify(user));
        setUserLogin({
          email: "",
          password: ""
        });
        setIsLoggedIn(true); // Set the user as logged in after successful login
        navigate('/create-trip');
      });

      return () => unsubscribe(); // Clean up the listener on unmount

    } catch (error) {
      console.error("Login failed: ", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
   <div>
      <h2 className='font-semibold text-3xl mx-20 my-10'>Login</h2>
     <div className='w-[80%] mx-20'>
      
      <Input 
        className="my-3"
        type="email"  
        placeholder='E-mail'
        value={userLogin.email}
        onChange={(e) => setUserLogin({
          ...userLogin,
          email: e.target.value
        })}
        disabled={isLoggedIn} 
      />
      
      <Input 
        className="my-3"
        type="password"  
        placeholder='Password'
        value={userLogin.password}
        onChange={(e) => setUserLogin({
          ...userLogin,
          password: e.target.value
        })}
        disabled={isLoggedIn} 
      />

      {error && <p className='text-red-500'>{error}</p>} 

      <Button 
        className='my-3'
        onClick={userLoginFunction}
        disabled={isLoggedIn} 
      >
        Log In
      </Button>

      <div>
        <h2 className='text-black'>
          Didn't have an account? 
          <Link className='text-pink-500 font-bold' to={'/signup'}>Sign Up</Link>
        </h2>
      </div>
    </div>
   </div>
  );
}

export default Login;
