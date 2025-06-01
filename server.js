const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) return res.status(500).send('Viga andmete lugemisel');
    const jsonData = JSON.parse(data);
    res.render('index', { person: jsonData });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server töötab pordil ${port}`);
});
