import Vehicle from "./Vehicle";
import { UtilitarianRentCalculator, IRentCalculator } from "./RentCalculator";
import Availability, { IAvailability } from "./Availability";

export default class Utilitarian extends Vehicle {
  constructor(
    plate: string,
    model: string,
    year: number,
    baseDailyRate: number = 120,
    rentCalculator: IRentCalculator = new UtilitarianRentCalculator(),
    availability: IAvailability = new Availability()
  ) {
    super(plate, model, year, baseDailyRate, rentCalculator, availability);
  }
}
