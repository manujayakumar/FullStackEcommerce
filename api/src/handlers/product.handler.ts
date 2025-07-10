import { Response, Request, NextFunction } from "express";

const productHandler = {
    getAllProducts: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json([]);
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getProductById: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    createProduct: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(201).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },updateProduct: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    deleteProduct: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(204).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default productHandler;