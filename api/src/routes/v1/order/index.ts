import { Router } from "express";
import handler from "../../../handlers";

const router = Router();

const {orders} = handler;

router.route('/')
    .get(orders.getAllOrders)
    .post(orders.createOrder);

router.route('/:id')
    .get(orders.getOrderById)
    .put(orders.updateOrder)
    .delete(orders.deleteOrder);

export default router;