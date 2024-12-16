import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import compression from "compression";
import express from "express";

const app = express();

app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
