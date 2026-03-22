import { searchusername } from "../controllers/loginhandler.js";
import express from "express";
const router = express.Router();
router.post("/login", searchusername);
export default router;
