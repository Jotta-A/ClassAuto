"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilitarianRentCalculator = exports.SedanRentCalculator = void 0;
class RentCalculator {
    calculate(days, baseDailyRate, discount) {
        let total = days * baseDailyRate;
        if (discount) {
            total -= discount;
        }
        return total;
    }
}
exports.default = RentCalculator;
class SedanRentCalculator extends RentCalculator {
    constructor() {
        super(...arguments);
        this.insuranceFee = 30;
    }
    calculate(days, baseDailyRate, discount) {
        // Sobrescrita chamando o comportamento da classe mãe
        const baseTotal = super.calculate(days, baseDailyRate, discount || 0);
        return baseTotal + this.insuranceFee;
    }
}
exports.SedanRentCalculator = SedanRentCalculator;
class UtilitarianRentCalculator extends RentCalculator {
    constructor() {
        super(...arguments);
        this.insuranceFee = 50;
    }
    calculate(days, baseDailyRate, discount) {
        // Sobrescrita chamando o comportamento da classe mãe
        const baseTotal = super.calculate(days, baseDailyRate, discount || 0);
        return baseTotal + this.insuranceFee;
    }
}
exports.UtilitarianRentCalculator = UtilitarianRentCalculator;
