import express from "express";

const router = express.Router();

//endpoints
router.get('/', (req, res)=>{
    res.send("list all products");
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send("A products")
});

router.post('/', (req, res)=> {
    res.send("new product created");
});

export default router;