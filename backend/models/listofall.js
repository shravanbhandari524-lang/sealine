import { pool } from "../config/db.js";
export const getalllist = async () => {
  const result = await pool.query("select * from listofall");
  return result.rows;
};
export const searchid = async (id) => {
  const result = await pool.query(
    "SELECT EXISTS (SELECT 1 FROM vendors WHERE vendorid = $1) AS found",
    [id],
  );

  return result.rows[0].found;
};
export const searchimo = async (id) => {
  const result = await pool.query(
    "SELECT EXISTS (SELECT 1 FROM listofall WHERE imo = $1) AS found",
    [id],
  );

  return result.rows[0].found;
};
export const insertlistofall = async ({
  shipname,
  imo,
  vendorid,
  workforcesize,
}) => {
  const result = await pool.query(
    "INSERT INTO listofall (shipname, imo, vendorid, date) VALUES ($1, $2, $3, CURRENT_DATE) RETURNING *",
    [shipname, imo, vendorid],
  );
  const result2 = await pool.query(
    "insert into demandlist (vesselid,workforcesize) values ($1,$2)",
    [result.rows[0].vesselid, workforcesize],
  );
  return result.rows;
};
export const deleteall = async () => {
  const result = await pool.query(
    "TRUNCATE TABLE listofall RESTART IDENTITY CASCADE;",
  );
  return result;
};
