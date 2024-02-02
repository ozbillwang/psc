import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [token, setToken] = useState('');

  // Function to get token from backend
  const getToken = async () => {
    try {
      const response = await axios.get('/auth');
      setToken(response.data.token);
      localStorage.setItem('jwtToken', response.data.token); // Store token in local storage
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const checkPasswordStrength = async () => {
    const backendEndpoint = "http://localhost:5000/check-password"; // Use the full URL if your backend is hosted separately

    try {
      const response = await axios.post(backendEndpoint, { password }, {
        headers: {
          Authorization: `Bearer ${token}` // Use token in request headers
        }
      });
      setStrength(response.data.strength);
    } catch (error) {
      console.error("Error:", error);
      setStrength('Error checking password strength.');
    }
  };

  return (
    <div className="App">
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={checkPasswordStrength}>Check Strength</button>
      <p>Password Strength: {strength}</p>
    </div>
  );
};

export default App;