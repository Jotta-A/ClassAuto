export enum VehicleStatus {
  AVAILABLE = "Available",
  RENTED = "Rented",
  MAINTENANCE = "Maintenance",
}

export interface IAvailability {
  isAvailable(): boolean;
  isAvailable(detailed: true): VehicleStatus;
  isAvailable(detailed?: boolean): boolean | VehicleStatus;
  getStatus(): VehicleStatus;
  setStatus(status: VehicleStatus): void;
  rent(): void;
  returnVehicle(): void;
}

export default class Availability implements IAvailability {
  private status: VehicleStatus = VehicleStatus.AVAILABLE;

  // Sobrecarga (Overloading)
  public isAvailable(): boolean;
  public isAvailable(detailed: true): VehicleStatus;
  public isAvailable(detailed?: boolean): boolean | VehicleStatus {
    if (detailed) {
      return this.status;
    }
    return this.status === VehicleStatus.AVAILABLE;
  }

  public getStatus(): VehicleStatus {
    return this.status;
  }

  public setStatus(status: VehicleStatus): void {
    this.status = status;
  }

  public rent(): void {
    if (this.isAvailable()) {
      this.status = VehicleStatus.RENTED;
    } else {
      console.log("Vehicle is already rented or not available.");
    }
  }

  public returnVehicle(): void {
    this.status = VehicleStatus.AVAILABLE;
  }
}

