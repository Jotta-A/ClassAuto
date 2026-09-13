// Sedan subclass: Includes a standard insurance fee on top of the daily rate
class Sedan extends Vehicle {
  private insuranceFee = 30;

  constructor(plate: string, model: string, year: number, baseDailyRate: number = 80) {
    super(plate, model, year, baseDailyRate);
  }

  calcRentValue(days: number): number {
    return (days * this.baseDailyRate) + this.insuranceFee;
  }
}