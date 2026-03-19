// config/db.js
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sealinedatabase",
  password: "postgres",
  port: 5432,
});
