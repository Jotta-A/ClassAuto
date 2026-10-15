import Vehicle from "./Vehicle";
import RentCalculator, { UtilitarianRentCalculator } from "./RentCalculator";

export default class Utilitarian extends Vehicle {
  constructor(plate: string, model: string, year: number, baseDailyRate: number = 120) {
    super(plate, model, year, baseDailyRate, new UtilitarianRentCalculator());
  }
}
