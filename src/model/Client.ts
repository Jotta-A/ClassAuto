export default class Client {
  private name!: string;
  private age!: number;

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}
