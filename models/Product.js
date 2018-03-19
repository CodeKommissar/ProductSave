const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  image: String,
  url: String,
  price: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model("producs", productSchema);
