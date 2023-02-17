const mongoose = require("mongoose");
//shape data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
// const cat = new Kitten({ name: 'Hoi Dan IT cat' });
// cat.save();