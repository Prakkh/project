import React from 'react';
import './SignUpPage.css';

function SignUpPage({ onSignUp }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sign-up logic goes here
    onSignUp();  // Navigate to the login page after signing up
  };

  return (  
    <div className="signup-container">
      <div className="dragon-logo">
        <img src="logoo.jpg" alt="Dragon Logo" />
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Let's Know You</h2>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="number" placeholder="Age" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
