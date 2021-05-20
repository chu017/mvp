const Foodys = require('../models/recipes.js');

const createRecipe = (input, callback) => {
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

module.exports = createRecipe;
