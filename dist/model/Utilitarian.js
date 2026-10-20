"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("./Vehicle"));
const RentCalculator_1 = require("./RentCalculator");
const Availability_1 = __importDefault(require("./Availability"));
class Utilitarian extends Vehicle_1.default {
    constructor(plate, model, year, baseDailyRate = 120, rentCalculator = new RentCalculator_1.UtilitarianRentCalculator(), availability = new Availability_1.default()) {
        super(plate, model, year, baseDailyRate, rentCalculator, availability);
    }
}
exports.default = Utilitarian;
