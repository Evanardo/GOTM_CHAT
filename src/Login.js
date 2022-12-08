import { Button } from '@mui/material';
import { auth, provider, signInPopup } from './FirebaseConfig';
import React from 'react';
import './Login.css';
import { signInWithPopup } from 'firebase/auth';


function Login() {

  const signIn = async () => {
    // e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='login'>

        <div className='login__logo'>
            <img src='https://i.ibb.co/T1rfpMX/Screenshot-2022-12-03-at-9-09-30-PM.png' alt=''/>
        </div>
        <Button onClick={signIn}>Join Us</Button>
    </div>
  )
}

export default Login;