const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter name"],
    },

    quality: {
      type: Number,
      require: [true, "Please enter quality"],
      default: 0,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
