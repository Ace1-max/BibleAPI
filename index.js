const express = require('express');
const axios = require('axios');
const app = express();

app.get('/random-verse', async (req, res) => {
  try {
    const response = await axios.get('https://bible-api.com/?random=verse');
    const { verses } = response.data;
    const verse = verses[0].verse;
    const chapter = verses[0].chapter;
    const text = verses[0].text;
    const book_name = verses[0].book_name;
    res.json({ book_name, chapter, verse, text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch verse' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});