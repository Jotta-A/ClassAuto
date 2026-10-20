"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Availability_1 = __importDefault(require("./Availability"));
const RentCalculator_1 = __importDefault(require("./RentCalculator"));
class Vehicle {
    constructor(plate, model, year, baseDailyRate, rentCalculator = new RentCalculator_1.default(), availability = new Availability_1.default()) {
        this.plate = plate;
        this.model = model;
        this.year = year;
        this.baseDailyRate = baseDailyRate;
        this.rentCalculator = rentCalculator;
        this.availability = availability;
    }
    // Delegação dos métodos para o objeto availability
    rent() {
        this.availability.rent();
    }
    returnVehicle() {
        this.availability.returnVehicle();
    }
    // Delegação dos métodos para o objeto rentCalculator
    calculateRent(days, discount) {
        return discount !== undefined
            ? this.rentCalculator.calculate(days, this.baseDailyRate, discount)
            : this.rentCalculator.calculate(days, this.baseDailyRate);
    }
}
exports.default = Vehicle;
