import { pool } from "../config/db.js";
export const searchusername = async (username) => {
  const result = await pool.query("select * from users where username = $1 ", [
    username,
  ]);
  return result.rows[0];
};
