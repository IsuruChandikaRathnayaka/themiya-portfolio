// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      {isAuthenticated ? <Dashboard /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default App;
