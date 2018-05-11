let mongoose = require('mongoose');


mongoose.model('User', new mongoose.Schema({

  username:{type: String},
  

},{timestamps: true}));