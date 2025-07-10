import { Response, Request, NextFunction } from "express";

const orderHandler = {
    getAllOrders: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json([]);
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    getOrderById: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    createOrder: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(201).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },updateOrder: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    deleteOrder: async(req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(204).json({});
        } catch (error) {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default orderHandler;