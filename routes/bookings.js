const bodyParser = require("body-parser");
const Booking = require("../models/Booking");
const Stripe = require("stripe");
const keys = require("../config/keys");

const createBooking = require("../services/createBooking");
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

  // @route POST /api/checkout
  // @desc Launch stripe checkout and take payment
  // @access Public
  app.post("/api/checkout", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: req.body.formData.email,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: req.body.formData.numOfRooms + " Rooms photographed",
            },
            unit_amount_decimal: req.body.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: req.body.formData,
      success_url: "http://localhost:3000/",
      cancel_url: "https://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  });

  // @route POST /api/webhook
  // @desc Create webhook to receive stripe notifications
  // @access Private
  app.post("/api/webhook", (req, res) => {
    const payload = req.rawBody;

    const sig = req.headers["stripe-signature"];

    let event;

    // Verify request is coming from stripe.
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        sig,
        keys.stripeWebhookSigningSecret
      );
    } catch (err) {
      console.log(err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      let data = session.metadata;
      if (session.payment_status == "paid") {
        data = { ...data, paid: true };
      }
      // Add booking to db
      createBooking(data);
    }

    res.send();
  });
};
