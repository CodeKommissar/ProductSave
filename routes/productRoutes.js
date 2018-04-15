const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Product = mongoose.model("products");

module.exports = app => {
    app.get("/api/products", requireLogin, async (req, res) => {
        const products = await Product.find({ _user: req.user.id });

        res.send(products);
    });

    app.post("/api/products", requireLogin, async (req, res) => {
        const { name, imageUrl, productUrl, price } = req.body;

        const product = new Product({
            name,
            imageUrl,
            productUrl,
            price,
            _user: req.user.id
        })

        try {
            await product.save();
            res.send(product);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.delete("/api/products/:product_id", requireLogin, async (req, res) => {
        console.log("deleting product " + req.params.product_id)
        
        const product = await Product.remove({ _id: req.params.product_id });
        const products = await Product.find({ _user: req.user.id });

        res.send(products);
    });
};
