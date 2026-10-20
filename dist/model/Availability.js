"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Availability {
    constructor() {
        this.rented = false;
    }
    isAvailable(detailed) {
        if (detailed) {
            return this.rented ? "Rented" : "Available";
        }
        return !this.rented;
    }
    rent() {
        if (this.isAvailable()) {
            this.rented = true;
        }
        else {
            console.log("Vehicle is already rented.");
        }
    }
    returnVehicle() {
        this.rented = false;
    }
}
exports.default = Availability;
