const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Product = mongoose.model("products");

module.exports = app => {
    app.post("/api/products", requireLogin, async (req, res) => {
      const { name, imageUrl, productUrl, price } = req.body;

      const product = new Survey({
            name,
            imageUrl,
            productUrl,
            price
        })

        try {
            await product.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};
