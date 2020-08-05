const mongoose = require("mongoose");

//Define a Schema
const productSchema = new mongoose.Schema(
  {
    //fields of our model
    name: String,
    price: Number,
    brand: String,
  },
  {
    timestamps: true, //mongoose to assign createdAt and updatedAt timestamp
  }
);

module.exports = mongoose.model("Product", productSchema);
