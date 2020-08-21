import { HashGenerator } from "../middleware/HashManager";
import { TokenGenerator } from "../middleware/TokenGenerator";
import { IdGenerator } from "../middleware/IdGenerator";
import { InvalidInputError } from "../Error/InvalidInputError";
import { Band } from "../models/Band";
import { BandDatabase } from "../data/BandDatabase";
import { Unauthorized } from "../Error/Unauthorized";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    description: string,
    nickname: string
  ) {
    if (!name || !email || !password || !description || !nickname) {
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

    await this.bandDatabase.signUp(
      new Band(id, name, email, cryptedPassword, description, 0, nickname)
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role: "NORMAL",
    });
    return { accessToken };
  }

  public async fetchBands(token: string) {
    const auth = await this.tokenGenerator.verify(token);
    if (auth.role !== "ADMIN") {
      throw new Unauthorized("You do not have access to this function.");
    }

    const bands = await this.bandDatabase.fetchBands();

    return bands;
  }
}
