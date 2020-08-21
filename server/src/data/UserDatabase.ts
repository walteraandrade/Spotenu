import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
  public static TABLE_NAME = "Spotenu_Users";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role,
        dbModel.nickname
      )
    );
  }

  public async signUp(user: User): Promise<void> {
    await this.getConnection().raw(`
          INSERT INTO ${UserDatabase.TABLE_NAME}
          VALUES (
              "${user.getId()}",
              "${user.getName()}",
              "${user.getEmail()}",
              "${user.getPassword()}",
              "${user.getRole()}",
              "${user.getNickname()}"
          )`);
  }

  public async fetchEmail(nickname: string): Promise<User | undefined> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${UserDatabase.TABLE_NAME} WHERE nickname = "${nickname}"`);

    return this.toModel(result[0][0]);
  }
}
