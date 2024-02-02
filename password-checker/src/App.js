import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = async () => {
    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = "YOUR_CHATGPT_TOKEN"; // Replace with your OpenAI API key or better, retrieve it from your backend

    const payload = {
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Check if the password '${password}' is strong, or weak. Please only answer 'strong', 'weak'.` },
      ],
      model: "gpt-4",
      max_tokens: 500,
    };

    try {
      const response = await axios.post(apiEndpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      const assistantContent = response.data.choices[0].message.content;
      setStrength(assistantContent);
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
