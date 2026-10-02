"use strict";
//Utilitarian Subclass
class Utilitarian extends Vehicle {
    constructor(plate, model, year, baseDailyRate = 120) {
        super(plate, model, year, baseDailyRate);
        this.insuranceFee = 50;
    }
    calcRentValue(days) {
        return (days * this.baseDailyRate) + this.insuranceFee;
    }
}
