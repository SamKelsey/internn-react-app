const Booking = require("../models/Booking");

module.exports = (info) => {
  const { name, email, address1, address2, city, postcode, bookingDate } = info;

  try {
    if (info.paid) {
      const booking = new Booking({
        name,
        email,
        address: {
          line1: address1,
          line2: address2,
          city: city,
          postcode: postcode,
        },
        bookingDate: "1999-07-03T13:00:00.000Z", // TODO
        paid: true,
      });
      booking.save();
    } else {
      const booking = new Booking({
        name,
        email,
        address: {
          line1: address1,
          line2: address2,
          city: city,
          postcode: postcode,
        },
        bookingDate: "1999-07-03T13:00:00.000Z", // TODO
      });
      booking.save();
    }
  } catch (err) {
    console.error(err.message);
  }
};
