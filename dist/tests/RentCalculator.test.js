"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RentCalculator_1 = __importStar(require("../model/RentCalculator"));
const Sedan_1 = __importDefault(require("../model/Sedan"));
const Utilitarian_1 = __importDefault(require("../model/Utilitarian"));
const Motorcycle_1 = __importDefault(require("../model/Motorcycle"));
describe("Regras de Cálculo de Aluguel (RentCalculator)", () => {
    describe("RentCalculator (Classe Base)", () => {
        let calculator;
        beforeEach(() => {
            calculator = new RentCalculator_1.default();
        });
        it("deve calcular o valor total com base nos dias e na diária base", () => {
            expect(calculator.calculate(5, 100)).toBe(500);
        });
        it("deve aplicar o desconto corretamente quando informado", () => {
            expect(calculator.calculate(5, 100, 50)).toBe(450);
        });
        it("não deve alterar o valor quando o desconto for zero", () => {
            expect(calculator.calculate(3, 70, 0)).toBe(210);
        });
    });
    describe("SedanRentCalculator (Sobrescrita com Taxa de Seguro R$ 30)", () => {
        let sedanCalculator;
        beforeEach(() => {
            sedanCalculator = new RentCalculator_1.SedanRentCalculator();
        });
        it("deve calcular a diária base e somar a taxa de seguro de R$ 30", () => {
            // 2 dias * R$ 80 = 160 + R$ 30 seguro = 190
            expect(sedanCalculator.calculate(2, 80)).toBe(190);
        });
        it("deve aplicar desconto e adicionar a taxa de seguro de R$ 30", () => {
            // 3 dias * R$ 80 = 240 - R$ 40 desconto = 200 + R$ 30 seguro = 230
            expect(sedanCalculator.calculate(3, 80, 40)).toBe(230);
        });
    });
    describe("UtilitarianRentCalculator (Sobrescrita com Taxa de Seguro R$ 50)", () => {
        let utilitarianCalculator;
        beforeEach(() => {
            utilitarianCalculator = new RentCalculator_1.UtilitarianRentCalculator();
        });
        it("deve calcular a diária base e somar a taxa de seguro de R$ 50", () => {
            // 2 dias * R$ 120 = 240 + R$ 50 seguro = 290
            expect(utilitarianCalculator.calculate(2, 120)).toBe(290);
        });
        it("deve aplicar desconto e adicionar a taxa de seguro de R$ 50", () => {
            // 3 dias * R$ 120 = 360 - R$ 60 desconto = 300 + R$ 50 seguro = 350
            expect(utilitarianCalculator.calculate(3, 120, 60)).toBe(350);
        });
    });
    describe("Delegação do Cálculo através das Classes de Veículos", () => {
        it("Sedan: diária padrão de R$ 80 + taxa de seguro R$ 30", () => {
            const sedan = new Sedan_1.default("ABC-1234", "Civic", 2022);
            expect(sedan.calculateRent(3)).toBe(270);
            expect(sedan.calculateRent(3, 20)).toBe(250);
        });
        it("Utilitário: diária padrão de R$ 120 + taxa de seguro R$ 50", () => {
            const util = new Utilitarian_1.default("DEF-5678", "Fiorino", 2021);
            expect(util.calculateRent(2)).toBe(290);
            expect(util.calculateRent(2, 30)).toBe(260);
        });
        it("Moto: diária padrão de R$ 40 sem taxas extras", () => {
            const moto = new Motorcycle_1.default("MTO-9999", "CB 500", 2023);
            expect(moto.calculateRent(4)).toBe(160);
            expect(moto.calculateRent(4, 10)).toBe(150);
        });
    });
});
