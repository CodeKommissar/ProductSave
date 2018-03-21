const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Product = mongoose.model("products");

module.exports = app => {
    app.post("/api/products", requireLogin, (req, res) => {
      const { name, imageUrl, productUrl, price } = req.body;

      const product = new Survey({
            name,
            imageUrl,
            productUrl,
            price
        })
    });
};
