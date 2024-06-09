const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  airportCode: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z]{3}$/
  },
  airportName: {
    type: String,
    required: true
  },
  location: {
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  facilities: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('Airport', AirportSchema);
