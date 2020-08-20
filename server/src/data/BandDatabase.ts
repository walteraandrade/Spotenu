import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../models/Band";

export class BandDatabase extends BaseDatabase {
  public static TABLE_NAME = "Spotenu_Bands";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role,
        dbModel.nickname
      )
    );
  }

  public async signUp(band: Band): Promise<void> {
    await this.getConnection().raw(`
          INSERT INTO ${BandDatabase.TABLE_NAME}
          VALUES (
              "${band.getId()}",
              "${band.getName()}",
              "${band.getEmail()}",
              "${band.getPassword()}",
              "${band.getRole()}",
              "${band.getDescription()}
          )`);
  }
}
