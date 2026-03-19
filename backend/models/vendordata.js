import { pool } from "../config/db.js";
export const getallvendors = async () => {
  const result = await pool.query("select * from vendors;");
  return result.rows;
};
export const deleteallvendors = async () => {
  const result = await pool.query("TRUNCATE TABLE vendors RESTART IDENTITY;");
};
export const insertvendor = async (name) => {
  const result = await pool.query(
    "INSERT INTO vendors(name) VALUES($1) RETURNING *",
    [name],
  );
  return result.rows;
};
export const deletevendor = async (id) => {
  const result = await pool.query(
    "DELETE FROM vendors WHERE vendorid = $1 RETURNING *",
    [id],
  );
};
