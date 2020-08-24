import { HashGenerator } from "../middleware/HashManager";
import { TokenGenerator } from "../middleware/TokenGenerator";
import { IdGenerator } from "../middleware/IdGenerator";
import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";

export class BandController {
  private static BandBusiness = new BandBusiness(
    new BandDatabase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );

  async fetchBands(req: Request, res: Response) {
    try {
      const token = (await req.headers.auth) as string;
      const result = await BandController.BandBusiness.fetchBands(token);

      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(error.statusCode | 400).send({
        message: error.message,
      });
    }
  }

  async approve(req: Request, res: Response) {
    try {
      const token = req.headers.token as string;
      const name = req.body.name;

      await BandController.BandBusiness.approve(name, token);

      res.status(200).send({
        message: "Band approved",
      });
    } catch (error) {
      res.status(error.stausCode || 400).send({
        message: error.message,
      });
    }
  }
}
