const express = require('express');
const app = express();

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

let total = 0;
app.get('/calculator', (req, res) => {
  res.json({ total });
});

