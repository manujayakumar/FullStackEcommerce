import express from "express";
import config from "./config";
import apiRoutes from "./routes/index";

const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.send("hellow:");
})
// error handlers

app.listen(config.PORT, () => console.log(`The server is successfully running on PORT: ${config.PORT}`));