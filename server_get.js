const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({ message: `Hello, ${firstName} ${lastName}!` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});