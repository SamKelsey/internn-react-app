const Booking = require("../models/Booking");

module.exports = (app) => {
  // @route GET api/bookings
  // @desc Get all bookings for a given day
  // @access Private
  app.get("/api/bookings/:day", async (req, res) => {
    // Get request date and create new date 1 day later
    const date = req.params.day;
    const dateTomorrow = new Date(Date.parse(date));
    dateTomorrow.setDate(dateTomorrow.getDate() + 1);

    // Find bookings after day and tomorrow
    const bookingDates = await Booking.find(
      {
        bookingDate: { $gte: date, $lt: dateTomorrow },
      },
      "bookingDate"
    );

    res.send(bookingDates);
  });

  // @route POST api/createbooking
  // @desc Take payment and create booking
  // @access Public
  app.post("/api/createbooking", (req, res) => {
    const { name, email, address, bookingDate } = req.body;

    try {
      const booking = new Booking({
        name,
        email,
        address,
        bookingDate,
      });

      booking.save();

      res.send(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });
};
