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

  try {
    const response = await axios.post(
      `https://run.glot.io/languages/${language}/latest`,
      {
        files: [{ name: `main.${language}`, content: code }],
        stdin: stdin || ''
      },
      {
        headers: {
          'Authorization': `Token ${process.env.GLOT_API_TOKEN}`,
          'Content-type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
