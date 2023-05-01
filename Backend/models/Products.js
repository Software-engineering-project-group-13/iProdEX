const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    age: { type: String },
    desc: { type: String, required: true },
    img: { type: Array },
    price: { type: Number, required: true },
    comments: [{ username: { type: String }, text: { type: String } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
