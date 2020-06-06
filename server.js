const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, './static/index.html'));
  res.render('pages/index', { pageTitle: 'Welcome to NodeJS training This is first draft' });
});

app.listen(port, () => {
  console.log(`Express server is listening on Port ${port}`);
});
