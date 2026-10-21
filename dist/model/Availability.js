"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleStatus = void 0;
var VehicleStatus;
(function (VehicleStatus) {
    VehicleStatus["AVAILABLE"] = "Available";
    VehicleStatus["RENTED"] = "Rented";
    VehicleStatus["MAINTENANCE"] = "Maintenance";
})(VehicleStatus || (exports.VehicleStatus = VehicleStatus = {}));
class Availability {
    constructor() {
        this.status = VehicleStatus.AVAILABLE;
    }
    isAvailable(detailed) {
        if (detailed) {
            return this.status;
        }
        return this.status === VehicleStatus.AVAILABLE;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    rent() {
        if (this.isAvailable()) {
            this.status = VehicleStatus.RENTED;
        }
        else {
            console.log("Vehicle is already rented or not available.");
        }
    }
    returnVehicle() {
        this.status = VehicleStatus.AVAILABLE;
    }
}
exports.default = Availability;
