import productController from "../controllers/productController.js"
import authMiddleware from "../middleware/authMiddleware.js";
import express from "express"

const router= express.Router();


router.post("/", authMiddleware, validateProduct, productController.createProduct);
router.get("/", productController.getAllProducts)
router.get("/:id", productController.getProductById)
router.delete("/:id", productController.deleteProduct)
router.patch("/:id", productController.updateProduct)

export default router;