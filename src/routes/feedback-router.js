import express from "express";
import { getFeedbacks } from "../controllers/index.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/feedbacks", getFeedbacks);

export default feedbackRouter;
