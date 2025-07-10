import { Router } from "express";
import handler from "../../../handlers";

const router = Router();

const {products} = handler;

router.route('/')
    .get(products.getAllProducts)
    .post(products.createProduct);

router.route('/:id')
    .get(products.getProductById)
    .put(products.updateProduct)
    .delete(products.deleteProduct);

export default router;