import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes

// error handlers

app.listen(PORT, () => console.log(`The server is successfully running on PORT: ${PORT}`));