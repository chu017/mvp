const Foodys = require('../models/recipes.js');

exports.getAll = (req, res) => {
  // your code here
  Foodys.find( {}, function(err, arr) {
    if (err) {
      res.status(400).send(err);
    } else if (arr) {
      res.status(200).send(arr);
    }
  })
};

exports.createRecipe = (input, callback) => {
  const { name, imageURL, description } = input;
  var newInput = {
    name: name,
    imageURL: imageURL,
    description: description,
    // like: like,
    // foodStyle: foodStyle,
    // mainIngredient: mainIngredient,
    // special: special
  }

  console.log(newInput);

  Foodys.create(newInput, function(err, data) {
    if (err) {
      throw err
    } else {
      callback(null, data);
    }
  })
};
