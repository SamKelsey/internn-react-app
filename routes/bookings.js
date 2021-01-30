const Booking = require("../models/Booking");
const Stripe = require("stripe");
const keys = require("../config/keys");
const stripe = Stripe(keys.stripeSecretKey);

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
  // @desc Create booking in mongo db
  // @access Private
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

  // @route POST /api/checkout
  // @desc Launch stripe checkout and take payment
  app.post("/api/checkout", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: req.body.email,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: req.body.numOfRooms + " Rooms photographed",
            },
            unit_amount_decimal: req.body.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://localhost:3000/success",
      cancel_url: "https://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  });
};
