import { Router } from "express";
import handler from "../../../handlers";


const router = Router();
const {orders} = handler;
// This module defines the routes for order-related operations.
router.route('/')
    .get(orders.getAllOrders)
    .post(orders.createOrder);

router.route('/:id')
    .get(orders.getOrderById)
    .put(orders.updateOrder)
    .delete(orders.deleteOrder);

export default router;