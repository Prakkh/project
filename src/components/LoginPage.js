import React from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic goes here
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="dragon-logo">
        <img src="logoo.jpg" alt="Dragon Logo" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <a href="/forgot-password" className="forgot-password">Forget Password?</a>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
