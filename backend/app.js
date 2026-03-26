import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ quiet: true });
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

import routes from "./routes/index.js";
app.use("/api", routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started easily on port${PORT}`);
});
