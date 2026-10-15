import Vehicle from "./Vehicle";
import RentCalculator from "./RentCalculator";

export default class Motorcycle extends Vehicle {
  constructor(plate: string, model: string, year: number, baseDailyRate: number = 40) {
    super(plate, model, year, baseDailyRate, new RentCalculator());
  }
}