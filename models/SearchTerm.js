const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

// Define our model
const searchTermSchema = new Schema({
  searchTerm: {
    type: String,
    required: true
  },
  searchDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// Create the model class
const ModelClass = mongoose.model('searchTerm', searchTermSchema);

// Export the model
module.exports = ModelClass;
