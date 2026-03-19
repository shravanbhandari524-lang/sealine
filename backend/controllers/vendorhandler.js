import * as vendors from "../models/vendordata.js";
export const getAllvendors = async (req, res) => {
  try {
    const result = await vendors.getallvendors();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const insertvendor = async (req, res) => {
  try {
    const result = await vendors.insertvendor(req.body.name);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
export const deleteallvendors = async (req, res) => {
  try {
    const result = await vendors.deleteallvendors();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
