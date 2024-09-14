import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../../service/firebaseConfig';
import { addDoc, Timestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

function SignUp() {

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const navigate = useNavigate();

  const userSignupFunction = async ()=> {
    if(userSignup.name === "" || userSignup.email === "" || userSignup.password === ""){
      console.log("fill all details");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
              month:"short",
              day:"2-digit",
              year:"numeric",
            }            
          )
      }

      const userRefrence = collection(db,"user")

      addDoc(userRefrence,user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      })
      navigate('/login')

    } catch (error) {
      
    }
  }
  return (
    <div>
      <h2 className='font-semibold text-3xl mx-20 my-10'>Sign Up</h2>
      <div className='w-[80%] mx-20'>
      <Input type="text" className='my-3' placeholder='Name' value={userSignup.name} onChange={(e) => {
        setUserSignup({
          ...userSignup,
          name: e.target.value
        })
      }}/>
      <Input type="email" className='my-3' placeholder='E-mail' value={userSignup.email} 
      onChange={(e)=>{
        setUserSignup({
          ...userSignup,
          email: e.target.value
        })
      }} />
      <Input type="password" className='my-3' placeholder='Password'  value={userSignup.password} onChange={(e) => {
        setUserSignup({
          ...userSignup,
          password:e.target.value
        })
      }}/>
      <Button className='my-3'
      onClick={userSignupFunction}>
        <Link to={'/login'}>SignUp</Link>
      </Button>

      <div>
        <h2 className='text-black font-medium'>Have an account ? <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
      </div>

    </div>
    </div>
  )
}

export default SignUp