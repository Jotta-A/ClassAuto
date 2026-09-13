// Motorcycle subclass: Uses a simple fixed daily rate
class Motorcycle extends Vehicle {
  constructor(plate: string, model: string, year: number, baseDailyRate: number = 40) {
    super(plate, model, year, baseDailyRate);
  }

  calcRentValue(days: number): number {
    return days * this.baseDailyRate;
  }
}