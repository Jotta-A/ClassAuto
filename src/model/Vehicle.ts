import Availability, { IAvailability } from "./Availability";
import RentCalculator, { IRentCalculator } from "./RentCalculator";

export default abstract class Vehicle {
  public availability: IAvailability;
  public rentCalculator: IRentCalculator;

  constructor(
    public plate: string,
    public model: string,
    public year: number,
    public baseDailyRate: number,
    rentCalculator: IRentCalculator = new RentCalculator(),
    availability: IAvailability = new Availability()
  ) {
    this.rentCalculator = rentCalculator;
    this.availability = availability;
  }

  // Delegação dos métodos para o objeto availability
  public rent(): void {
    this.availability.rent();
  }

  public returnVehicle(): void {
    this.availability.returnVehicle();
  }

  // Delegação dos métodos para o objeto rentCalculator
  public calculateRent(days: number, discount?: number): number {
    return discount !== undefined
      ? this.rentCalculator.calculate(days, this.baseDailyRate, discount)
      : this.rentCalculator.calculate(days, this.baseDailyRate);
  }
}