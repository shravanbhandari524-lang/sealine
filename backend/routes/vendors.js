import { getAllvendors } from "../controllers/vendorhandler.js";
import express from "express";
const router = express.Router();
router.get("/getallvendors", getAllvendors);
export default router;
