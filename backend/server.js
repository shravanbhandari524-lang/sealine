// server.js
import express from "express";
import vendors from "./routes/vendors.js";
import listofall from "./routes/listofall.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/vendors", vendors);
app.use("/api/listofall", listofall);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
