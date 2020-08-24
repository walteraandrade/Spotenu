import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
  public static TABLE_NAME = "Spotenu_Users";

  public async fetchBands(): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT name, description FROM ${BandDatabase.TABLE_NAME} WHERE type = "BAND" AND is_approved = false;`);

    return result[0];
  }

  public async login(nickname: string): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${BandDatabase.TABLE_NAME} WHERE nickname = "${nickname}" AND TYPE = "BAND;`);

    return result[0];
  }

  public async approveBand(name: string): Promise<void> {
    await this.getConnection().raw(`
    UPDATE Spotenu_Users
    SET is_approved = true
    WHERE name = "${name}"`);
  }
}
