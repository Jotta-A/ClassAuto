import Vehicle from "./Vehicle";
import RentCalculator, { IRentCalculator } from "./RentCalculator";
import Availability, { IAvailability } from "./Availability";

export default class Motorcycle extends Vehicle {
  constructor(
    plate: string,
    model: string,
    year: number,
    baseDailyRate: number = 40,
    rentCalculator: IRentCalculator = new RentCalculator(),
    availability: IAvailability = new Availability()
  ) {
    super(plate, model, year, baseDailyRate, rentCalculator, availability);
  }
}