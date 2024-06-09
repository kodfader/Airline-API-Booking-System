const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  bookingID: {
    type: Schema.Types.ObjectId,
    ref: 'Booking',
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['credit card', 'PayPal', 'bank transfer', 'cash']
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  transactionDateTime: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);
