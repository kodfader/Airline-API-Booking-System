const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirlineSchema = new Schema({
  airlineName: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true,
    match: /^\+?[1-9]\d{1,14}$/
  },
  operatingRegion: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Airline', AirlineSchema);
