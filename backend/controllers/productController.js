import productModel from "../models/productModel.js";
import fs from "fs";

const productList = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const addProduct = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;

    const product = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await product.save();
    res.json({ success: true, message: "Produs adaugat" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    fs.unlink(`uploads/${product.image}`, () => {});

    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Produs sters" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { productList, addProduct, removeProduct };
