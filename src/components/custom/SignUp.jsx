import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../../service/firebaseConfig';
import { addDoc, Timestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className='flex flex-col justify-center items-center gap-5 w-full'>
      <h2 className='text-center font-medium pt-5'>Sign Up</h2>
      <input type="text" className='border-2 rounded p-2' placeholder='Name' value={userSignup.name} onChange={(e) => {
        setUserSignup({
          ...userSignup,
          name: e.target.value
        })
      }}/>
      <input type="email" className='border-2 rounded p-2' placeholder='E-mail' value={userSignup.email} 
      onChange={(e)=>{
        setUserSignup({
          ...userSignup,
          email: e.target.value
        })
      }} />
      <input type="password" className='border-2 rounded p-2' placeholder='Password'  value={userSignup.password} onChange={(e) => {
        setUserSignup({
          ...userSignup,
          password:e.target.value
        })
      }}/>
      <button className='bg-[#8ad8c4] rounded-xl px-5 py-2'
      onClick={userSignupFunction}>
        <Link to={'/login'}>SignUp</Link>
      </button>

      <div>
        <h2 className='text-black'>Have an account ?<Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
      </div>

    </div>
  )
}

export default SignUp