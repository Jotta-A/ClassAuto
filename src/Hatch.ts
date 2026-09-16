// Hatch subclass: Uses a simple fixed daily rate
class Hatch extends Vehicle {
  constructor(plate: string, model: string, year: number, baseDailyRate: number = 50) {
    super(plate, model, year, baseDailyRate);
  }

  calcRentValue(days: number): number {
    return days * this.baseDailyRate;
  }
}
