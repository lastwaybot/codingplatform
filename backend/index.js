require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/run', async (req, res) => {
  const { language, code, stdin } = req.body;
  if (!language || !code) {
    return res.status(400).json({ error: 'language and code are required' });
  }

  // Map your language names to Judge0 language IDs
  const languageMap = {
    python: 71,      // Python 3.8.1
    javascript: 63,  // JavaScript (Node.js 12.14.0)
    java: 62,        // Java (OpenJDK 13.0.1)
    cpp: 54,         // C++ (GCC 9.2.0)
    c: 50,           // C (GCC 9.2.0)
    // Add more as needed
  };

  const language_id = languageMap[language];
  if (!language_id) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  try {
    // Submit code for execution
    const submission = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
      {
        source_code: code,
        language_id,
        stdin: stdin || ''
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          // 'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY' // Optional, for higher rate limits
        }
      }
    );
    res.json(submission.data);
  } catch (error) {
    res.status(500).json({ error: (error.response && error.response.data) || error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
