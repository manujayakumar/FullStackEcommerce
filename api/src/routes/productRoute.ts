import express from  "express";
import { getAll, 
        getProduct,
        updatProduct,
        createProduct,
        deleteProduct
    } from "../controllers/productController"

const router = express.Router();

router.route('/').get((req, res)=> {
    const result = getAll();
    res.status(201).json(result);
})


export default router;