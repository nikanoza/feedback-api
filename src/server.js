import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./config/mongo.js";
import feedbackRouter from "./routes/feedback-router.js";
import authRouter from "./routes/auth-router.js";
import bodyParser from "body-parser";

dotenv.config();
connection();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", feedbackRouter);
app.use("/api", authRouter);

app.listen(process.env.PORT || 3000);
