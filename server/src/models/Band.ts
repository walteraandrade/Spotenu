import { SYSTEM_ROLE } from "./User";

export class Band {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: SYSTEM_ROLE,
    private description: string
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

  public getDescription(): string {
    return this.description;
  }
}
