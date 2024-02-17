// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Проверка валидности пароля
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const isValid = password.length >= 6 && hasNumber && hasLetter;

    if (isValid) {
      onLogin();
    } else {
      setError('Пароль должен содержать минимум 6 символов, включая как минимум одну цифру и одну букву.');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default LoginForm;
