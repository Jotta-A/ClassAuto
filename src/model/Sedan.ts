import Vehicle from "./Vehicle";
import { SedanRentCalculator, IRentCalculator } from "./RentCalculator";
import Availability, { IAvailability } from "./Availability";

export default class Sedan extends Vehicle {
  constructor(
    plate: string,
    model: string,
    year: number,
    baseDailyRate: number = 80,
    rentCalculator: IRentCalculator = new SedanRentCalculator(),
    availability: IAvailability = new Availability()
  ) {
    super(plate, model, year, baseDailyRate, rentCalculator, availability);
  }
}