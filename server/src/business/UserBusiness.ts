import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../middleware/HashManager";
import { TokenGenerator } from "../middleware/TokenGenerator";
import { IdGenerator } from "../middleware/IdGenerator";
import { InvalidInputError } from "../Error/InvalidInputError";
import { stringToUserType, User } from "../models/User";
import { NotFound } from "../Error/NotFound";

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
    type: string,
    nickname: string,
    description?: string
  ) {
    if (!name || !email || !password || !type || !nickname) {
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

    if (!description) {
      await this.userDatabase.signUp(
        new User(
          id,
          name,
          nickname,
          email,
          cryptedPassword,
          stringToUserType(type),
          0,
          ""
        )
      );
    } else {
      await this.userDatabase.signUp(
        new User(
          id,
          name,
          nickname,
          email,
          cryptedPassword,
          stringToUserType(type),
          0,
          description
        )
      );
    }

    const accessToken = this.tokenGenerator.generate({
      id,
      type,
    });
    return { accessToken };
  }

  public async login(nickname: string, password: string): Promise<string> {
    if (!nickname || !password) {
      throw new InvalidInputError("You need both parameters to log in!");
    }
    const user = await this.userDatabase.fetchEmail(nickname);

    if (!user) {
      throw new NotFound("User not found");
    }

    const validatePassword = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!validatePassword) {
      throw new InvalidInputError("Invalid password");
    }

    const token = this.tokenGenerator.generate({
      id: user.getId(),
      type: user.getType(),
    });

    return token;
  }

  public async verify(token: string): Promise<any> {
    const result = await this.tokenGenerator.verify(token);

    return result;
  }
}
