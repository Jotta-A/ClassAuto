import Client from "./Client";
import Vehicle from "./Vehicle";

export default class Contract {
  private static nextId = 1;

  public readonly id: number;
  public readonly startDate: Date;
  public readonly totalValue: number;

  constructor(
    public readonly client: Client,
    public readonly vehicle: Vehicle,
    public readonly days: number
  ) {
    this.id = Contract.nextId++;
    this.startDate = new Date();
    this.totalValue = vehicle.calculateRent(days);
  }

  public getEndDate(): Date {
    const end = new Date(this.startDate);
    end.setDate(end.getDate() + this.days);
    return end;
  }

  public getSummary(): string {
    return [
      `Contrato #${this.id}`,
      `Cliente: ${this.client.getName()} (${this.client.getAge()} anos)`,
      `Veículo: [${this.vehicle.constructor.name}] ${this.vehicle.model} | Placa: ${this.vehicle.plate} | Ano: ${this.vehicle.year}`,
      `Diária base: R$ ${this.vehicle.baseDailyRate.toFixed(2)}`,
      `Período: ${this.days} dia(s) — ${this.startDate.toLocaleDateString("pt-BR")} até ${this.getEndDate().toLocaleDateString("pt-BR")}`,
      `Valor total: R$ ${this.totalValue.toFixed(2)}`,
    ].join("\n");
  }
}
