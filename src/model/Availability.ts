export interface IAvailability {
  isAvailable(): boolean;
  isAvailable(detailed: boolean): string | boolean;
  isAvailable(detailed?: boolean): string | boolean;
  rent(): void;
  returnVehicle(): void;
}

export default class Availability implements IAvailability {
  private rented: boolean = false;

  // Sobrecarga (Overloading)
  public isAvailable(): boolean;
  public isAvailable(detailed: boolean): string | boolean;
  public isAvailable(detailed?: boolean): string | boolean {
    if (detailed) {
      return this.rented ? "Rented" : "Available";
    }
    return !this.rented;
  }

  public rent(): void {
    if (this.isAvailable()) {
      this.rented = true;
    } else {
      console.log("Vehicle is already rented.");
    }
  }

  public returnVehicle(): void {
    this.rented = false;
  }
}
