const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    flightID: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: true
    },
    passengerID: {
      type: Schema.Types.ObjectId,
      ref: 'Passenger',
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid'],
      required: true
    }
  });
  
  module.exports = mongoose.model('Booking', BookingSchema);
  