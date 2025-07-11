import { Router } from "express";
import v1Routes from "./v1/index";

const router = Router();
// This file serves as the main entry point for the API routes.
// It imports the versioned routes and sets up the base path for the API.
router.use('/v1', v1Routes);

export default router;