import express from "express";
import { protectRoute } from "../middleware/protectRoute.js"; // assuming you have this middleware
import { searchUsersByUsername } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/users", protectRoute, searchUsersByUsername);

export default router;
