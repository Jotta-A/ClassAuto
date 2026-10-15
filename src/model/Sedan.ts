import Vehicle from "./Vehicle";
import RentCalculator, { SedanRentCalculator } from "./RentCalculator";

export default class Sedan extends Vehicle {
  constructor(plate: string, model: string, year: number, baseDailyRate: number = 80) {
    super(plate, model, year, baseDailyRate, new SedanRentCalculator());
  }
}