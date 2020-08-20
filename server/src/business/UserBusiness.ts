import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../middleware/HashManager";
import { TokenGenerator } from "../middleware/TokenGenerator";
import { IdGenerator } from "../middleware/IdGenerator";
import { InvalidInputError } from "../Error/InvalidInputError";
import { stringToUserRole, User } from "../models/User";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string,
    nickname: string
  ) {
    console.log(name, email, password, role, nickname);
    if (!name || !email || !password || !role || !nickname) {
      throw new InvalidInputError("There is an input missing");
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") < email.indexOf("@")) {
      throw new InvalidInputError("Invalid email format");
    }

    if (password.length < 6) {
      throw new InvalidInputError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatabase.signUp(
      new User(
        id,
        name,
        email,
        cryptedPassword,
        stringToUserRole(role),
        nickname
      )
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role,
    });
    return { accessToken };
  }
}
