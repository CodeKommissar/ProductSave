const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  imageUrl: String,
  productUrl: String,
  price: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model("products", productSchema);
