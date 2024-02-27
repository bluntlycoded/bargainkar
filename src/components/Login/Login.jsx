// Login.jsx

import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       // Redirect or handle successful login
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//     }
//   };

  return (
    <div className='maindiv'>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button> 
      <a href='/register'><p>Don't Have An Account?</p></a>
      {/* onClick={handleLogin} */}
    </div>
  );
};

export default Login;
