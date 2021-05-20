const mongoose = require('mongoose');

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

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
