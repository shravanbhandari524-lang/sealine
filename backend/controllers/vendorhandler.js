import * as vendors from "../models/vendordata.js";
export const getAllvendors = async (req, res) => {
  try {
    const result = await vendors.getallvendors();
    res.json(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
