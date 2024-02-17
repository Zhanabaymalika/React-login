// App.jsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
