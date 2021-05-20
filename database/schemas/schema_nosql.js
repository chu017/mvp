
let userSchema = mongoose.Schema({

  id: Number,
  name: String,
  description: String,
  followers: {
    number: Number,
    followers: [userID1, userID2, userID3],
  }
  followering: {
    number: Number,
    following: [userID1, userID2, userID3],
  }

});


let recipeSchema = mongoose.Schema({

  id: Number,
  name: String, // recipe name
  like: Number, // most popular
  foodStyle: String, // japanese, chinese food
  mainIngredient: String, // beef, chicken
  special: String, // health food, creative
  userId: Number,
	imageURL: String,
	Ingredients: [ ingredient1: String, ingredient2: String, ingredient3: String ],
	method: [
    step1: {
      imageURL: String,
      description: String,
    },
    step2: {
      imageURL: String,
      description: String,
    },
    step3: {
      imageURL: String,
      description: String,
    },
    //...
  ],

});
