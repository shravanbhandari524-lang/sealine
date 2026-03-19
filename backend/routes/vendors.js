import {
  getAllvendors,
  insertvendor,
  deleteallvendors,
} from "../controllers/vendorhandler.js";
import express from "express";
const router = express.Router();
router.get("/getallvendors", getAllvendors);
router.post("/insertvendor", insertvendor);
router.get("/deleteall", deleteallvendors);
export default router;
