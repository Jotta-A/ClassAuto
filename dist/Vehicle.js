"use strict";
// Abstract base class defining the common structure
class Vehicle {
    constructor(plate, model, year, baseDailyRate) {
        this.plate = plate;
        this.model = model;
        this.year = year;
        this.baseDailyRate = baseDailyRate;
    }
}
