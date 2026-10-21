"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("./Vehicle"));
// Hatch subclass: Uses a simple fixed daily rate
class Hatch extends Vehicle_1.default {
    constructor(plate, model, year, baseDailyRate = 50) {
        super(plate, model, year, baseDailyRate);
    }
    calcRentValue(days) {
        return days * this.baseDailyRate;
    }
}
exports.default = Hatch;
//SO MAIS TESTES OIGNORARRR
