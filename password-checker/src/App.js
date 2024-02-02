import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = async () => {
    // Update the endpoint to your backend endpoint
    const backendEndpoint = "/check-password"; // Use the full URL if your backend is hosted separately
  
    try {
      const response = await axios.post(backendEndpoint, { password });
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
