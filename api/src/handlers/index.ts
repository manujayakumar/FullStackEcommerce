import productHandler from "./product.handler";
import orderHandler from "./order.handler";

const handler={
    products: productHandler,
    orders: orderHandler
}

export default handler;