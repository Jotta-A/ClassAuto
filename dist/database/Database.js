"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sedan_1 = __importDefault(require("../model/Sedan"));
const Utilitarian_1 = __importDefault(require("../model/Utilitarian"));
const Motorcycle_1 = __importDefault(require("../model/Motorcycle"));
const Hatch_1 = __importDefault(require("../model/Hatch"));
class Database {
    constructor() {
        this.clients = [];
        this.vehicles = [];
        this.contracts = [];
        this.initVehicles();
    }
    initVehicles() {
        this.vehicles.push(new Sedan_1.default("ABC-1234", "Civic", 2022), new Utilitarian_1.default("DEF-5678", "Fiorino", 2021), new Motorcycle_1.default("MTO-9999", "CB 500", 2023), new Hatch_1.default("GHI-9012", "HB20", 2020));
    }
}
exports.default = Database;
