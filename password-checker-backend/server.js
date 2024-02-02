// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const cors = require('cors');
app.use(cors()); // This will allow all domains. For production, configure allowed origins.

const PORT = process.env.PORT || 5000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Your OpenAI API key stored in .env

app.use(express.json());

app.post('/check-password', async (req, res) => {
  console.log(req.body); // Log the request body to see what's being received
//   const { password } = req.body;
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";

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
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    });

    const assistantContent = response.data.choices[0].message.content;
    res.send({ strength: assistantContent });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: 'Error checking password strength.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
