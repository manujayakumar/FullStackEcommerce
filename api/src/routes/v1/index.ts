import { Router } from "express";
import productRoutes from "./product/index";
import orderRoutes from "./order/index";

const router = Router();

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.get('/', (req, res) => {res.send("Hellow: v1")});

export default router;