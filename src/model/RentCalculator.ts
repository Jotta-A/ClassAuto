export interface IRentCalculator {
  calculate(days: number, baseDailyRate: number): number;
  calculate(days: number, baseDailyRate: number, discount: number): number;
  calculate(days: number, baseDailyRate: number, discount?: number): number;
}

export default class RentCalculator implements IRentCalculator {
  // Sobrecarga (Overloading)
  public calculate(days: number, baseDailyRate: number): number;
  public calculate(days: number, baseDailyRate: number, discount: number): number; //talvez retirar esse desconto ?

  public calculate(days: number, baseDailyRate: number, discount?: number): number {
    let total = days * baseDailyRate;
    if (discount) {
      total -= discount;
    }
    return total;
  }
}

export class SedanRentCalculator extends RentCalculator {
  private insuranceFee = 30;

  // Sobrescrita (Overriding) da sobrecarga
  public calculate(days: number, baseDailyRate: number): number;
  public calculate(days: number, baseDailyRate: number, discount: number): number;
  public calculate(days: number, baseDailyRate: number, discount?: number): number {
    // Sobrescrita chamando o comportamento da classe mãe
    const baseTotal = super.calculate(days, baseDailyRate, discount || 0);
    return baseTotal + this.insuranceFee;
  }
}

export class UtilitarianRentCalculator extends RentCalculator {
  private insuranceFee = 50;

  // Sobrescrita da sobrecarga
  public calculate(days: number, baseDailyRate: number): number;
  public calculate(days: number, baseDailyRate: number, discount: number): number;
  public calculate(days: number, baseDailyRate: number, discount?: number): number {
    // Sobrescrita chamando o comportamento da classe mãe
    const baseTotal = super.calculate(days, baseDailyRate, discount || 0);
    return baseTotal + this.insuranceFee;
  }
}
