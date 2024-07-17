import express from "express";
import dotenv from "dotenv";
import { ConnectMongoose } from "./config/db.js";
import router from "./routes/question.router.js";
import bodyParser from "body-parser";

dotenv.config();

const server = express();
server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Hello");
});

server.use("/api", router);

server.listen(8080, () => {
  console.log("server is listening");
  ConnectMongoose();
});
