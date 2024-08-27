import React, { useState } from 'react';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');

  const handleSignUp = () => {
    setCurrentPage('login');
  };

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div>
      {currentPage === 'signup' && <SignUpPage onSignUp={handleSignUp} />}
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'dashboard' && <DashboardPage />}
    </div>
  );
}

export default App;
