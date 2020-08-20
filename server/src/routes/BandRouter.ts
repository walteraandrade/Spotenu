import express from "express";
import { BandController } from "../controller/BandController";

export const userRouter = express.Router();

const bandController = new BandController();

userRouter.post("/signup", bandController.signUp);
