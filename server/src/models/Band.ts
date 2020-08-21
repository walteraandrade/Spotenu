export class Band {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private description: string,
    private is_approved: number,
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

  public getIsApproved(): number {
    return this.is_approved;
  }

  public getDescription(): string {
    return this.description;
  }

  public getNickname(): string {
    return this.nickname;
  }
}
