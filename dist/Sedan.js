"use strict";
// Sedan subclass: Includes a standard insurance fee on top of the daily rate
class Sedan extends Vehicle {
    constructor(plate, model, year, baseDailyRate = 80) {
        super(plate, model, year, baseDailyRate);
        this.insuranceFee = 30;
    }
    calcRentValue(days) {
        return (days * this.baseDailyRate) + this.insuranceFee;
    }
}
