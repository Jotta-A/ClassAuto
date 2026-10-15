import Availability from "./Availability";
import RentCalculator from "./RentCalculator";

export default abstract class Vehicle {
  public availability: Availability;
  public rentCalculator: RentCalculator;

  constructor(
    public plate: string,
    public model: string,
    public year: number,
    public baseDailyRate: number,
    rentCalculator: RentCalculator = new RentCalculator()
  ) {
    this.availability = new Availability();
    this.rentCalculator = rentCalculator;
  }

  // Delegação dos métodos para o objeto availability
  public rent(): void {
    this.availability.rent();
  }

  public returnVehicle(): void {
    this.availability.returnVehicle();
  }
}