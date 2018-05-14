let mongoose = require('mongoose');


mongoose.model('User', new mongoose.Schema({

  name:{type: String},
  

},{timestamps:true,collection:'segment'}));