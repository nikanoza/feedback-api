import express from "express";
import { createUser } from "../controllers/index.js";

const authRouter = express.Router();

authRouter.post("/register", createUser);

export default authRouter;
