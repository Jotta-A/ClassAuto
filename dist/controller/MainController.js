"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../database/Database"));
const Client_1 = __importDefault(require("../model/Client"));
const Contract_1 = __importDefault(require("../model/Contract"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.database = new Database_1.default();
        new MainScreen_1.default(this);
    }
    getNewClient() {
        return new Client_1.default();
    }
    getAvailableVehicles() {
        return this.database.vehicles.filter((vehicle) => vehicle.availability.isAvailable());
    }
    getAllVehicles() {
        return this.database.vehicles;
    }
    getAvailableVehiclesByType(type) {
        return this.getAvailableVehicles().filter((vehicle) => vehicle instanceof type);
    }
    // Cadastra o cliente, marca o veículo como alugado e guarda o contrato no BD
    createContract(client, vehicle, days) {
        const contract = new Contract_1.default(client, vehicle, days);
        vehicle.rent();
        this.database.clients.push(client);
        this.database.contracts.push(contract);
        return contract;
    }
}
exports.default = MainController;
