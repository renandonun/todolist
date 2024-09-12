import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/task", taskRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fjhlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Mongo DB Conectado!");
    app.listen(port, () => {
      console.log(`API rodando no endereço: http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
