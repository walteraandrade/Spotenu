import express from "express";
import { BandController } from "../controller/BandController";

export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/signup", bandController.signUp);

bandRouter.get("/all", bandController.fetchBands);