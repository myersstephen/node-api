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
    //https://mongoosejs.com/docs/api.html#document_Document-toObject
    toObject: {
      transform: function (doc, ret, options) {
        //when transform is called in toObject we can manipulate
        //the document and remove sensitive information
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Product", productSchema);
