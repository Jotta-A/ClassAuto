import Vehicle from "./Vehicle";
import RentCalculator from "./RentCalculator";

export default class Hatch extends Vehicle {
  constructor(plate: string, model: string, year: number, baseDailyRate: number = 50) {
    super(plate, model, year, baseDailyRate, new RentCalculator());
  }
}
