import { BaseDatabase } from "../data/BaseDatabase";
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

  async signUp(req: Request, res: Response) {
    try {
      const result = await BandController.BandBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.description,
        req.body.nickname
      );

      res.status(200).send({
        message: `${result.accessToken}`,
      });
    } catch (error) {
      res.status(error.errorCode || 400).send({
        message: error.message,
      });
    }
    BaseDatabase.destroyConnection();
  }

  async fetchBands(req: Request, res: Response) {
    try {
      const token = (await req.headers.token) as string;
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
}
