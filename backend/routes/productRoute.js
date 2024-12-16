import express from "express";
import {
  addProduct,
  productList,
  removeProduct,
} from "../controllers/productController.js";
import multer from "multer";
const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRouter.get("/list", productList);
productRouter.post("/add", upload.single("image"), addProduct);
productRouter.post("/remove", removeProduct);

export default productRouter;
