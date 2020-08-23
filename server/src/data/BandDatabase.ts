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
        dbModel.description,
        dbModel.is_approved,
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
              "${band.getDescription()}",
              "${band.getIsApproved()}",
              "${band.getPassword()}",
              "${band.getNickname()}"
          )`);
  }

  public async fetchBands(): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT name, nickname, email, is_approved FROM Spotenu_Bands;`);

    return result[0];
  }

  public async login(nickname: string): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT * FROM Spotenu_Bands WHERE nickname = "${nickname}";`);

    return result[0];
  }
}
