import { InvalidInputError } from "../Error/InvalidInputError";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private type: USER_TYPE,
    private nickname: string,
    private is_approved: number,
    private description?: string
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

  public getNickname(): string {
    return this.nickname;
  }

  public getType(): string {
    return this.type;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public getIsApproved(): number {
    return this.is_approved;
  }
}

export const stringToUserType = (input: string): USER_TYPE => {
  switch (input) {
    case "REGULAR":
      return USER_TYPE.REGULAR;
    case "ADMIN":
      return USER_TYPE.ADMIN;
    case "BAND":
      return USER_TYPE.BAND;
    case "PREMIUM":
      return USER_TYPE.PREMIUM;
    default:
      throw new InvalidInputError("Please insert a valid role");
  }
};

export enum USER_TYPE {
  ADMIN = "ADMIN",
  REGULAR = "REGULAR",
  PREMIUM = "PREMIUM",
  BAND = "BAND",
}
