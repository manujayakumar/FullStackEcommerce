import { Request, Response } from "express";

export function productLists(req: Request, res: Response){
    res.send("list all products");
}

export function productItem(req: Request, res: Response){
    res.send("get a product")
}

export function createProduct(req: Request, res: Response){
    res.send("created product");
}

export function updateProduct(req: Request, res: Response){
    res.send("updated product");
}

export function deleteProduct(req: Request, res: Response){
    res.send("delete product")
}