import express from "express";
import productRoute from "./routes/productRoute";
import productRouter from "./routes/products"


const PORT = process.env.PORT || 4000;
const app = express();

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.status(201).send("Hi, there..");
});
app.use('/reminder', productRoute);

app.use('/products', productRouter);
// error handlers

app.listen(PORT, () => console.log(`The server is successfully running on PORT: ${PORT}`));