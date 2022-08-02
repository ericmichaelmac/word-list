const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use(express.static('public'))

app.get('/test', (req, res) => {
  res.json({"body": "Hello World!"})
})