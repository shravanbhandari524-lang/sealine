import * as users from "../models/logindata.js";
import bcrypt from "bcrypt";
export const searchusername = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await users.searchusername(username, password);
    if (!user) {
      return res.json({
        success: false,
        message: "user not found ",
      });
    }
    const ismacth = await bcrypt.compare(password, user.password);
    if (!ismacth) {
      return res.json({ success: false, message: "password wrong" });
    } else {
      return res.json({
        success: true,
        message: "password ok",
        type: user.type,
      });
    }
  } catch (err) {
    console.log({ err: err.message });
  }
};
