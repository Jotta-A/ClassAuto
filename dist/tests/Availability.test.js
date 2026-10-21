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
Object.defineProperty(exports, "__esModule", { value: true });
const Availability_1 = __importStar(require("../model/Availability"));
describe("Availability e VehicleStatus Enum", () => {
    let availability;
    beforeEach(() => {
        availability = new Availability_1.default();
    });
    it("deve iniciar com status AVAILABLE e retornar true para isAvailable()", () => {
        expect(availability.isAvailable()).toBe(true);
        expect(availability.getStatus()).toBe(Availability_1.VehicleStatus.AVAILABLE);
        expect(availability.isAvailable(true)).toBe(Availability_1.VehicleStatus.AVAILABLE);
    });
    it("deve mudar o status para RENTED após rent()", () => {
        availability.rent();
        expect(availability.isAvailable()).toBe(false);
        expect(availability.getStatus()).toBe(Availability_1.VehicleStatus.RENTED);
        expect(availability.isAvailable(true)).toBe(Availability_1.VehicleStatus.RENTED);
    });
    it("deve voltar para AVAILABLE após returnVehicle()", () => {
        availability.rent();
        expect(availability.isAvailable()).toBe(false);
        availability.returnVehicle();
        expect(availability.isAvailable()).toBe(true);
        expect(availability.getStatus()).toBe(Availability_1.VehicleStatus.AVAILABLE);
    });
    it("deve permitir definir status de manutenção MAINTENANCE", () => {
        availability.setStatus(Availability_1.VehicleStatus.MAINTENANCE);
        expect(availability.isAvailable()).toBe(false);
        expect(availability.getStatus()).toBe(Availability_1.VehicleStatus.MAINTENANCE);
    });
});
