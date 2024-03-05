// Login.js

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import firebaseApp from '../Firebase';


import './Login.css';

const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, loading, error] = useAuthState(auth);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Firebase Authentication</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">Error: {error.message}</p>}
      {user ? (
        <div>
          <p>Welcome, {user.email}! You are logged in.</p>
          <button onClick={() => auth.signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={handleLogin}>Login</button>

          <p>
            Don't have an account? <Link to="/register">Sign up here</Link>.
          </p>
          <p>
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
        </div>
      )}
    </div>
  );
};

export default Login;
