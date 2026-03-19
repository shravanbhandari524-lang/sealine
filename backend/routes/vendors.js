import {
  getAllvendors,
  insertvendor,
  deleteallvendors,
  deletevendor,
} from "../controllers/vendorhandler.js";
import express from "express";
const router = express.Router();
router.get("/getallvendors", getAllvendors);
router.post("/insertvendor", insertvendor);
router.get("/deleteall", deleteallvendors);
router.post("/deletevendor", deletevendor);
export default router;
