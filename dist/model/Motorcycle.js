"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("./Vehicle"));
const RentCalculator_1 = __importDefault(require("./RentCalculator"));
const Availability_1 = __importDefault(require("./Availability"));
class Motorcycle extends Vehicle_1.default {
    constructor(plate, model, year, baseDailyRate = 40, rentCalculator = new RentCalculator_1.default(), availability = new Availability_1.default()) {
        super(plate, model, year, baseDailyRate, rentCalculator, availability);
    }
}
exports.default = Motorcycle;
