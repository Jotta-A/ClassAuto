"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../database/Database"));
const Client_1 = __importDefault(require("../model/Client"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.database = new Database_1.default();
        new MainScreen_1.default(this);
    }
    getNewClient() {
        return new Client_1.default();
    }
    getAllClients() { }
}
exports.default = MainController;
