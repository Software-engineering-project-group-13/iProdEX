const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");
const CryptoJs = require("crypto-js");
const Favorite = require("../models/SellerProducts");
const Products = require("../models/Products");

// CREATE

router.post("/:id/", async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ userId: req.params.id });
    const newProd = new Products({
      title: req.body.prodname,
      categories: req.body.category,
      desc: req.body.desc,
      price: req.body.price,
      age: req.body.age,
      company: req.body.company,
      img: req.body.image,
    });

    const savedProd = await newProd.save();
    const prodId = await Products.findOne({ desc: req.body.desc });

    if (!favorite) {
      const newUserFavorites = new Favorite({
        userId: req.params.id,
        products: prodId._id,
      });
      const savedFavorite = await newUserFavorites.save();
      res.status(201).json(savedFavorite);
    } else {
      // res.status(201).json(favorite.products);
      // const isThere = await Favorite.find({
      //   products: { $elemMatch: { $eq: req.body.productId.toString() } },
      // });
      // // res.status(201).json(isThere);
      // if (isThere.length === 0) {
      const id = prodId._id.toString();
      favorite.products = [...favorite.products, id];
      const savedFavorite = await favorite.save();
      res.status(201).json(savedFavorite);
      // } else {
      //   res.status(201).json(isThere);
      // }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE;
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedFavorite = await Favorite.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE

router.post("/delete/:id/", async (req, res) => {
  try {
    // await Favorite.findByIdAndDelete(req.params.id);
    const favorite = await Favorite.findOne({ userId: req.params.id });

    const val = favorite.products.indexOf(req.body.productId.toString());

    favorite.products.splice(val, 1);

    const savedFavorite = await favorite.save();
    res.status(201).json(savedFavorite);

    // const removedFavorites = Favorite.updateOne(
    //   {
    //     _id: Favorite.findOne({ userId: req.params.id }),
    //   },
    //   { $pull: { products: req.body.productId.toString() } }
    // );
    // res.status(201).json(removedFavorites);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER CART

router.get("/find/:userId", async (req, res) => {
  try {
    const favorite = await Favorite.findOne({
      userId: req.params.userId,
    });
    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL

router.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(201).json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
