// ForgotPassword.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import firebaseApp from '../Firebase';
import './Login.css'; // Import the CSS file

const auth = getAuth(firebaseApp);

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error('Password reset error:', error.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      {resetSent ? (
        <div>
          <p>Password reset email sent. Check your inbox.</p>
          <Link to="/">Go Back to Login</Link>
        </div>
      ) : (
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
