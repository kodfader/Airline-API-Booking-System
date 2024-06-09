const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Import routes
const airportRoutes = require('./routes/airportRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const flightRoutes = require('./routes/flightRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// Use routes
app.use('/api/airports', airportRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/passengers', passengerRoutes);
app.use('/api/payments', paymentRoutes);

// Error handling middleware
//app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
