import { HashGenerator } from "../middleware/HashManager";
import { TokenGenerator } from "../middleware/TokenGenerator";
import { IdGenerator } from "../middleware/IdGenerator";
import { InvalidInputError } from "../Error/InvalidInputError";
import { BandDatabase } from "../data/BandDatabase";
import { Unauthorized } from "../Error/Unauthorized";
import { NotFound } from "../Error/NotFound";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async fetchBands(token: string) {
    const auth = await this.tokenGenerator.verify(token);
    if (auth.role !== "ADMIN") {
      throw new Unauthorized("You do not have access to this function.");
    }

    const bands = await this.bandDatabase.fetchBands();

    return bands;
  }

  public async login(nickname: string, password: string) {
    if (!nickname || !password) {
      throw new InvalidInputError("You need both parameters to log in!");
    }
    const user = await this.bandDatabase.login(nickname);

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

    if (user.getIsApproved === 0) {
      throw new Unauthorized(
        "Your band still needs to be approved by an admin before you can log in"
      );
    }
    const token = this.tokenGenerator.generate({
      id: user.getId(),
      type: user.getType(),
    });

    return token;
  }
}
