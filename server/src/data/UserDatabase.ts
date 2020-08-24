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
        dbModel.nickname,
        dbModel.email,
        dbModel.password,
        dbModel.type,
        dbModel.is_approved,
        dbModel.description
      )
    );
  }

  public async signUp(user: User): Promise<void> {
    await this.getConnection().raw(`
          INSERT INTO ${UserDatabase.TABLE_NAME}
          VALUES (
              "${user.getId()}",
              "${user.getName()}",
              "${user.getNickname()}",
              "${user.getEmail()}",
              "${user.getPassword()}",
              "${user.getType()}",
              "${user.getIsApproved()}",
              "${user.getDescription()}"
          )`);
  }

  public async fetchEmail(nickname: string): Promise<User | undefined> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${UserDatabase.TABLE_NAME} WHERE nickname = "${nickname}"`);

    return this.toModel(result[0][0]);
  }
}
