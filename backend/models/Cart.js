const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
  },

  productCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const cart = mongoose.model("Cart", cartSchema);

module.exports = cart;
