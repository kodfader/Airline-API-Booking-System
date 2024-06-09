const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  flightNumber: {
    type: String,
    required: true
  },
  departureDateTime: {
    type: Date,
    required: true
  },
  arrivalDateTime: {
    type: Date,
    required: true
  },
  originAirportCode: {
    type: String,
    required: true,
    match: /^[A-Z]{3}$/
  },
  destinationAirportCode: {
    type: String,
    required: true,
    match: /^[A-Z]{3}$/
  },
  availableSeats: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Flight', FlightSchema);
