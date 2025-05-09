import express from "express";
import {
    productLists,
    productItem,
    createProduct,
    updateProduct,
    deleteProduct
} from "./productController";
const router = express.Router();

//endpoints
router.route('/').get(productLists)
    .post(createProduct);

router.route('/:id').get(productItem)
    .put(updateProduct)
    .delete(deleteProduct);

export default router;