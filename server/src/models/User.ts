import { InvalidInputError } from "../Error/InvalidInputError";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: SYSTEM_ROLE,
    private nickname: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): string {
    return this.role;
  }

  public getNickname(): string {
    return this.nickname;
  }
}

export const stringToUserRole = (input: string): SYSTEM_ROLE => {
  switch (input) {
    case "NORMAL":
      return SYSTEM_ROLE.NORMAL;
    case "ADMIN":
      return SYSTEM_ROLE.ADMIN;
    default:
      throw new InvalidInputError("Please insert a valid role");
  }
};

export enum SYSTEM_ROLE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
