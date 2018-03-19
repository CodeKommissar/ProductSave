const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  image: String,
  url: String,
  price: String
});

mongoose.model("producs", productSchema);
