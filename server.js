const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");

const app = express();

// Connect to database
try {
  mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected...");
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

app.use(bodyParser.json());

// Implement routes
require("./routes/bookings")(app);

// Listen on port
const port = 5000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
