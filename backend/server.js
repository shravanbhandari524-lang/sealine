// server.js
import express from "express";
import vendors from "./routes/vendors.js";

const app = express();
app.use(express.json());

app.use("/api", vendors);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
