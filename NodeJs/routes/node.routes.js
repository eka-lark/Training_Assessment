const express = require("express");
const router = express.Router();
/* Product Model */
const Product = require("../models/models.products");

/* POST /api/products => Create new product -done*/
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product({
      pro_Id: req.body.pro_Id,
      title: req.body.title,
      descriptions: req.body.descriptions,
    });

    if (!newProduct) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET /api/products => Get All product -done */
router.get("/", async (req, res) => {
  Product.find().then((products) => res.json(products));
});

/* GET /api/products/1 => Get product detail-done */
router.get("/:id", async (req, res) => {
  Product.findById(req.params.id)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

/* PUT /api/products/1 => Update Product -done */
router.put("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      (product.pro_Id = req.body.pro_Id),
        (product.title = req.body.title),
        (product.descriptions = req.body.descriptions);

      product
        .save()
        .then(() => res.json("Product Updated Successfully!!"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error " + error));
});

/* DELETE /api/products/1 => Delete product from array -done */
router.delete("/:id", (req, res) => {
  Product.findById({ _id: req.params.id })
    .then((product) => product.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
