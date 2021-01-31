const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  bookedDate: {
    type: Date,
    default: Date.now,
  },
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = Booking = mongoose.model("bookings", BookingSchema);
