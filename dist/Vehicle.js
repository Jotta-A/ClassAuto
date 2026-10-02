"use strict";
// Abstract base class defining the common structure
class Vehicle {
    constructor(plate, model, year, baseDailyRate) {
        this.plate = plate;
        this.model = model;
        this.year = year;
        this.baseDailyRate = baseDailyRate;
        this.rented = false;
    }
    // Checks if the vehicle is available for rent
    isAvailable() {
        return !this.rented;
    }
    // Marks the vehicle as rented
    rent() {
        if (this.isAvailable()) {
            this.rented = true;
        }
        else {
            console.log("Vehicle is already rented.");
        }
    }
    // Returns the vehicle to available status
    returnVehicle() {
        this.rented = false;
    }
}
