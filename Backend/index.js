const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const favoriteRoute = require("./routes/favorites");
const selleritemsRoute = require("./routes/sellerproducts");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/favorites", favoriteRoute);
app.use("/api/selleritems", selleritemsRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});

module.exports = app;