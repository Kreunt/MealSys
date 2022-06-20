const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");

const usersRouter = require("./routes/users-route.js");
const usersTokenRouter = require("./routes/users-route-usertoken.js");
const customersRouter = require("./routes/customers-route.js");
const personalsRouter = require("./routes/personal-route.js");
const ordersRouter = require("./routes/orders-route.js");

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Bestimmen von welcher URL der Request erhalten wird.

app.use("/api/login", usersTokenRouter);
app.use("/api/users", usersRouter);
app.use("/api/customers", customersRouter);
app.use("/api/personal", personalsRouter);
app.use("/api/orders", ordersRouter);

app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500).send("Snap! Etwas ist gebrochen.");
});

app.use(function (req, res) {
  console.log("this is 404", req.body);
  res.status(404).send("Sorry, wir konnten es nicht finden!");
});

app.listen(PORT, function () {
  console.log(`Server laeuft an der Port ${PORT}`);
});
