const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to Shop V2 base"))
  .catch(err => console.error(err));

const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server started"));
