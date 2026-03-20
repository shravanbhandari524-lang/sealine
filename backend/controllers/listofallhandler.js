import * as listofall from "../models/listofall.js";
export const getalllist = async (req, res) => {
  try {
    const result = await listofall.getalllist();
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
export const searchid = async (req, res) => {
  try {
    const found = await listofall.searchid(req.body.id);

    res.status(200).json({ found });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
export const searchimo = async (req, res) => {
  try {
    const found = await listofall.searchimo(req.body.imo);
    res.status(200).json({ found });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
export const insertlistofall = async (req, res) => {
  try {
    const payload = {
      shipname: req.body.shipname,
      imo: req.body.imo,
      vendorid: req.body.vendorid,
      workforcesize: req.body.workforcesize,
    };
    const result = await listofall.insertlistofall(payload);
    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
      code: err.code,
      detail: err.detail,
      constraint: err.constraint,
    });
  }
};
export const deleteall = async (req, res) => {
  try {
    const result = await listofall.deleteall();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
