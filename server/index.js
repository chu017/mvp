const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database');
const Recipes = require('./../database/controllers/recipes.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/recipes', (req, res) => {
  // console.log(req.body);
  const input = req.body;

  Recipes(input, function(err, data) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
