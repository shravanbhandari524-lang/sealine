import {
  deleteall,
  getalllist,
  insertlistofall,
  searchid,
  searchimo,
} from "../controllers/listofallhandler.js";
import express from "express";
const router = express.Router();
router.get("/getalllist", getalllist);
router.post("/searchid", searchid);
router.post("/searchimo", searchimo);
router.post("/insertlistofall", insertlistofall);
router.get("/deleteall", deleteall);
export default router;
