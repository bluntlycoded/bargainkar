// Signup.jsx

import React, { useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   auth,
// } from 'firebase/auth';
import './Signup.css'; // Import your stylesheet

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      console.error('Please agree to the terms and conditions');
      return;
    }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         // auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Set additional user data (auto-assign is_admin as 0)
//       // You may adjust this based on your backend structure
//       await setAdditionalUserData(user.uid, {
//         firstName,
//         lastName,
//         email,
//         phone,
//         is_admin: 0,
//       });

//       // Redirect or handle successful signup
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//     }
   };

//   const handleGoogleSignup = async () => {
//     // const provider = new GoogleAuthProvider();
//     try {
//       const userCredential = await signInWithPopup(auth, provider);
//       const user = userCredential.user;

//       // Check if the user already exists in your database
//       // If not, you may want to redirect them to a profile setup page
//       console.log('Google Sign Up Successful:', user);
//     } catch (error) {
//       console.error('Error signing up with Google:', error.message);
//     }
//   };

  const setAdditionalUserData = async (userId, data) => {
    // Implement your logic to set additional user data
    // For example, make an API call to your backend to store this data
    console.log('Setting additional user data:', data);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <div className="signup-form">
        <div className="signup-input-group">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="signup-input-group">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="signup-input-group">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="terms-checkbox">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          <label htmlFor="agreeTerms">
            I agree to the terms and conditions
          </label>
        </div>
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
        <button className="google-signup-button" 
        // onClick={handleGoogleSignup}
        >
          Sign Up with Google
        </button>
        <a href='/login'><p>Already Have An Account?</p></a>
        {/* Add button for Apple Sign Up */}
      </div>
    </div>
  );
};

export default Signup;
