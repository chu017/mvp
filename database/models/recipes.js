const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({

  id: Number,
  name: String, // recipe name
  like: Number, // most popular
  foodStyle: String, // japanese, chinese food
  mainIngredient: String, // beef, chicken
  special: String, // health food, creative
  userId: Number,
	imageURL: String,
  user: String,
  userURL: String,
	ingredients: {
    1: String, 2: String, 3: String
  },
	methods: {
    1:{
      imageURL: String,
      description: String,
    },
    2:{
      imageURL: String,
      description: String,
    },
    3:{
      imageURL: String,
      description: String,
    },
  },
});

const Recipes = mongoose.model('Recipes', recipeSchema);

module.exports = Recipes;
