const mongoose = require("mongoose");

const sellerProductsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SellerItems", sellerProductsSchema);
