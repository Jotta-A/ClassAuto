"use strict";
// Motorcycle subclass: Uses a simple fixed daily rate
class Motorcycle extends Vehicle {
    constructor(plate, model, year, baseDailyRate = 40) {
        super(plate, model, year, baseDailyRate);
    }
    calcRentValue(days) {
        return days * this.baseDailyRate;
    }
}
