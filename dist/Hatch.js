"use strict";
// Hatch subclass: Uses a simple fixed daily rate
class Hatch extends Vehicle {
    constructor(plate, model, year, baseDailyRate = 50) {
        super(plate, model, year, baseDailyRate);
    }
    calcRentValue(days) {
        return days * this.baseDailyRate;
    }
}
