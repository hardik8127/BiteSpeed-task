import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/customer.route.js";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello guys from Identity Reconciliation  🔥🔥");
});

app.use("/api/v1/identity", contactRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running on Port 8080");
});
