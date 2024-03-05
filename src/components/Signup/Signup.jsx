// Signup.js

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../Firebase'; // Update import
import { signInWithPopup } from 'firebase/auth'; // Import signInWithPopup from firebase/auth
import './Signup.css'; // Import the new CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = async () => {
    try {
      // Additional validation for name, phone number, and terms agreement
      if (!name || !phoneNumber || !agreeTerms) {
        alert('Please fill in all required fields and agree to terms.');
        return;
      }

      // Password and Confirm Password validation
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      // Successful signup alert
      alert('Signup successful! You can now log in.');
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // Use signInWithPopup from the auth object
      await signInWithPopup(auth, googleProvider);
      alert('Google signup successful!');
    } catch (error) {
      console.error('Google signup error:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Phone Number:</label>
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <div className="terms-container">
        <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
        <label>Agree to Terms and Conditions</label>
      </div>

      <button onClick={handleSignUp}>Signup</button>
      <button onClick={handleGoogleSignup}>Signup with Google</button>
    </div>
  );
};

export default Signup;
