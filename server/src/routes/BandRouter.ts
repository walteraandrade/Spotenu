import express from "express";
import { BandController } from "../controller/BandController";

export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.get("/all", bandController.fetchBands);

bandRouter.put("/approve", bandController.approve);
