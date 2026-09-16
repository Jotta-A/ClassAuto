//Utilitarian Subclass
class Utilitarian extends Vehicle {
    private insuranceFee = 50;

    constructor(plate: string, model: string, year: number, baseDailyRate: number = 120) {
        super(plate, model, year, baseDailyRate);
    }

    calcRentValue(days: number): number {
        return (days * this.baseDailyRate) + this.insuranceFee;
    }
}
